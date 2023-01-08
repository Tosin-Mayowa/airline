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
import { useMemo, useState,useCallback,useEffect } from "react";
import { useGlobalFilter, useTable, } from 'react-table';
import { formatDate } from '../../lib/utils';
import { AiOutlineSearch } from "react-icons/ai";
import AddButton from '../AircraftTable/AddButton';
import ActionButtons from '../ActionButtons/ActionButton'
import axios from 'axios';
export default function FlightTable() {

    const [isOpen, setIsOpen] = useState(false);
    const [flightData, setFlightData] = useState([]);
    const handleIsOpen = (val) => {
        setIsOpen(!val);

    };
    const getAllFlight = useCallback(async () => {
        const resp = await axios.get('https://airline-production.up.railway.app/flights');
        console.log(resp?.data);
        setFlightData(resp?.data)
    }, []);

  

    useEffect(() => {
 getAllFlight();
    }, [flightData, getAllFlight])

    const tableHeader = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "ORIGIN",
                accessor: "origin",
            },
            {
                Header: "DESTINATION",
                accessor: "destination",
            },
            {
                Header: "Flight Date",
                accessor: "flight_date",
                Cell: (props) => {
                    const flight = props?.cell?.row?.original?.flight_date?.slice(0,11);
                    return formatDate(flight.replaceAll('-','/'))
                }
            },




            {
                Header: "",
                accessor: "more",
                Cell: (props) => {
                    return (
                        <Flex w="75%" justifyContent="flex-start">
                            <ActionButtons flightData={props?.cell?.row?.original} />
                        </Flex>
                    );
                },
            },
        ],
        []
    );
    const data = useMemo(() => flightData, [flightData]);
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
        <Box display='flex' flexDir='column' height='100%' overflow='hidden' px='25px'>
            <Flex my="40px" w="100%" data-testid="elect-pro" >
                <Flex w="100%" flexDir="column">
                    <Flex alignItems="center" justify="space-between" w="100%">
                        <Flex
                            as="form"
                            w="35%"
                            display={"flex"}
                            data-testid="electro-search"
                            ml="-11px"
                        >
                            <Flex as={FormControl} justifyContent="center" width="100%">
                                <InputGroup>
                                    {!globalFilter && <InputLeftElement
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
                            Add Flight Data
                                    </Button>

                        <Box className={isOpen ? 'Modal' : ""}>
                            {isOpen && (
                                <AddButton isOpen={isOpen} handleIsOpen={handleIsOpen} flight={flightData} />
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