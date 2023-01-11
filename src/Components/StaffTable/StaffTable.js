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
import { useMemo,useState,useCallback,useEffect } from "react";
import { useGlobalFilter, useTable, } from 'react-table';

import { AiOutlineSearch } from "react-icons/ai";
import AddButton  from '../AircraftTable/AddButton';
import './Modal.css';
import  ActionButtons  from '../ActionButtons/ActionButton'

export default function StaffTable() {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const [staffData, setStaffData] = useState([]);
    const handleIsOpen = (val) => {
        setIsOpen(!val);

    };
    
    const getAllStaff = useCallback(async () => {
        const resp = await axios.get('https://airline-production.up.railway.app/staff');
        console.log({ data: resp?.data});
        const data = resp?.data;
        setStaffData((prev)=>[...prev,...data])
    }, []);

 useEffect(()=>{
    getAllStaff();
},[])

    useEffect(() => {
     
        if (staffData.length)getAllStaff();
    }, [staffData])

    const tableHeader = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "SURNAME",
                accessor: "surname",
            },
            {
                Header: "FIRST NAME",
                accessor: "given_name",
               
            },
            {
                Header: "CATEGORY",
                accessor: "category",

            },
            {
                Header: "SALARY",
                accessor: "salary",
                Cell: (props) => {
                   
                    const number = props?.cell?.row?.original?.salary;
                    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(number);
                }
            },
            {
                Header: "ADDRESS",
                accessor: "address",

            },

            {
                Header: "TELEPHONE",
                accessor: "telephone",

            },
            {
                Header: "",
                accessor: "more",
                Cell: (props) => {
                    
                    return (
                        
                        <Flex w="75%" justifyContent="flex-start">
                            
                            <ActionButtons editData={props?.cell?.row?.original} />
                        </Flex>
                    );
                },
            },
        ],
        []
    );
    const data = useMemo(() => staffData, [staffData]);
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
                            Add Staff Data
                                    </Button>
                                
                        <Box className={isOpen ? 'Modal' : ""}>
                            {isOpen && (
                                <AddButton isOpen={isOpen} handleIsOpen={handleIsOpen} staff={staffData}  />
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