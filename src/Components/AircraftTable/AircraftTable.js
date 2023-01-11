import {
    Box,
    Button,
  
    Flex,
    FormControl,
    Input,
    InputGroup,
    InputLeftElement,
    Table,
    Tbody,
    Td,

    Th,
    Thead,
    Tr,
    
} from "@chakra-ui/react";
import axios from "axios";
import { useMemo, useState,useEffect,useCallback } from "react";
import { useGlobalFilter, useTable } from 'react-table';

import { AiOutlineSearch } from "react-icons/ai";
import AddButton from './AddButton';
import ActionButtons from '../ActionButtons/ActionButton'

export default function AircraftTable() {

    const [isOpen, setIsOpen] = useState(false);
    
    const [aircraftData, setAircraftData] = useState([]);
    const handleIsOpen = (val) => {
        setIsOpen(!val);

    };
    const getAllAircraft = useCallback(async () => {
        const resp = await axios.get('https://airline-production.up.railway.app/aircraft');
        const data = resp?.data;
        setAircraftData((prev) => [...prev, ...data])
       

    }, []);

    
    useEffect(() => {
        getAllAircraft();
    }, [])

    useEffect(() => {
        if(aircraftData.length)getAllAircraft();
    }, [aircraftData])
    const tableHeader = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "MANUFACTURER",
                accessor: "manufacturer",
            },
            {
                Header: "MODEL NAME",
                accessor: "model_name",
                
            },
            
            {
                Header: "MODEL NUMBER",
                accessor: "model_number",

            },

            
            {
                Header: "",
                accessor: "more",
                Cell: (props) => {
                    return (
                        <Flex w="75%" justifyContent="flex-start">
                            <ActionButtons airData={props?.cell?.row?.original} />
                        </Flex>
                    );
                },
            },
        ],
        []
    );
    const data = useMemo(() => aircraftData, [aircraftData]);
    const columns = tableHeader;

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({ columns, data }, useGlobalFilter);

    const { globalFilter } = state;

    const resetSearch = (e) => {
        e.target.blur();
        setGlobalFilter("");
    };

    return (
        <Box display='flex' flexDir='column' height='100%' overflow='hidden' px='25px' >
            <Flex my="40px" w="100%" data-testid="elect-pro" >
                <Flex w="100%" flexDir="column">
                    <Flex alignItems="center" justify="space-between" w="100%">
                        <Flex
                            as="form"
                            w="35%"
                            display={"flex"}
                            data-testid="air-search"
                            ml="-11px"
                        >
                            <Flex as={FormControl} justifyContent="center" width="100%">
                                <InputGroup>
                                    {!globalFilter&&<InputLeftElement
                                        pointerEvents="none"
                                        mt="12px"
                                        ml="5px"
                                        fontSize="30px"
                                    >
                                        <AiOutlineSearch color="gray" />
                                    </InputLeftElement>}
                                    <Input
                                        data-testid="Apicall-search-field"
                                        placeholder={"        " + "Search Data"}
                                        h="50px"
                                        value={globalFilter || ""}
                                        name="name"
                                        onChange={(e) => {
                                            setGlobalFilter(e.target.value);
                                        }}
                                        fontSize="20px"
                                        autoComplete="off"
                                        width="100%"
                                    />
                                </InputGroup>
                            </Flex>
                        </Flex>
                        <Button
                            className={isOpen ? 'BtnClick' : "Btn"}
                            onClick={() => {
                                handleIsOpen(isOpen);
                            }}
                        >
                            Add Aircraft Data
                                    </Button>

                        <Box className={isOpen ? 'Modal' : ""}>
                            {isOpen && (
                                <AddButton isOpen={isOpen} handleIsOpen={handleIsOpen} aircraft={aircraftData} />
                            )}
                        </Box>
                    </Flex>

                    {globalFilter && (
                        <Flex mt="1.5rem">
                            <Button
                                variant="link"
                                colorScheme="red"
                                ml="2.5rem"
                                onClick={resetSearch}
                                color="red"
                                outline="none"
                            >
                                Reset Search
              </Button>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        <Table
            {...getTableProps()}
            style={{ border: "solid 1px blue" }}
            width="100%"
        >
            <Thead>
                {headerGroups?.map((headerGroup, idx) => (
                    <Tr {...headerGroup?.getHeaderGroupProps()} key={idx}>
                        {headerGroup?.headers?.map((column, idx) => (
                            <Th
                                {...column?.getHeaderProps()}
                                style={{
                                    borderBottom: "solid 3px red",
                                    background: "aliceblue",
                                    color: "black",
                                    fontWeight: "bold",
                                }}
                                key={idx}
                            >
                                {column?.render("Header")}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {rows?.map((row, idx) => {
                    prepareRow(row);
                    return (
                        <Tr {...row?.getRowProps()} key={idx}>
                            {row?.cells?.map((cell, idx) => {
                                return (
                                    <Td
                                        {...cell?.getCellProps()}
                                        style={{
                                            padding: "10px",
                                            border: "solid 1px gray",
                                            background: "papayawhip",
                                        }}
                                        key={idx}
                                    >
                                        {cell?.render("Cell")}
                                    </Td>
                                );
                            })}
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
      </Box >
    )
}