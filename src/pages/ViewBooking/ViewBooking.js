
import {
    Box,
    Button,
    Grid,
    Flex,
    FormControl,
    GridItem,
    Input,
    InputGroup,
   Center,
   Text

} from "@chakra-ui/react";


import { AiOutlineSearch } from "react-icons/ai";
import {useState,useCallback,useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import ActionButtons from '../../Components/ActionButtons/ActionButton';
const ViewBooking= () => {
    const [bookingData, setBookingData] = useState([]);
const [val,setVal]=useState('');
    const getAllBooking = useCallback(async () => {
        const resp = await axios.get('https://airline-production.up.railway.app/booking');
        
        setBookingData(resp?.data)
    }, []);
    
    
    useEffect(() => {

        getAllBooking();
    }, [bookingData,getAllBooking])


    const getData = useCallback(async (id) => {
        const resp = await axios.get(`https://airline-production.up.railway.app/booking/${id}`);
        console.log({ book: resp?.data });
        setBookingData(resp?.data)
    }, []);


    return (
        <>
            <Flex w="100%" flexDir="column" px="10px">
            <Flex
                as="form"
                w="35%"
                display={"flex"}
                data-testid="electro-search"
                ml="-11px"
            >
                <Flex as={FormControl} justifyContent="center" ml='15px' mt='20px' width="100%">
                    <InputGroup>
                     
                        <Input
                            data-testid="Apicall-search-field"
                            placeholder={"        " + "Search By ID Only"}
                            h="50px"
                                value={val}
                            name="name"
                                onChange={(e) => {
                                    setVal(e.target.value);
                                    getData(e.target.value)
                                }}
                            fontSize="20px"
                            autoComplete="off"
                            width="100%"
                        />
                    </InputGroup>
                </Flex>
            </Flex>

            <Box>
                <h2 className=''>ViewDetails</h2>
                    <Grid templateColumns='repeat(3, 1fr)' gap={5}>
                        {bookingData?.map((item) => (
                            <GridItem key={item.id} border='2px solid #20A39E'>
                            <Link to={`/viewbooking/${item.id}`}>
                                
                                    <Box className=''>
                                       
                                        <Text className=''>{item.surname}{"  "}{item.given_name}</Text>
                                        <Text className=''>
                                            {item.address}
                                        </Text>
                                        <Text>Phone:{item.telephone}</Text>
                                    </Box>
                                    
                            </Link>
                                
                                <ActionButtons bookingData={item} />
                                
                        </GridItem>
                    ))}
                </Grid>
            </Box>
            </Flex>
        </>
    )
};

export default ViewBooking;