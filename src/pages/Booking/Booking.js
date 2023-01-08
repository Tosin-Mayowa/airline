
import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import {useState} from 'react';
import axios from 'axios';
const Booking = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [flightDate, setFlightDate] = useState('');
    const [seatCount, setSeatCount] = useState('');
    const [addrss, setAddrss] = useState('');
    const [bookingDate, setBkingDate] = useState('');
    const [price, setPrice] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
const reset =()=>{
    setFirstName('');
    setLastName('');
    setPhone('');
    setFlightDate('');
    setSeatCount('');
    setAddrss('');
    setBkingDate('');
    setPrice('');
    setOrigin('');
    setDestination('')
}

    const bookingDetails = async () => {
        
        const given_name = firstName;
    
        const address = addrss;
        const telephone = phone;
        const flight_date = flightDate;
        const surname = lastName;
       const seat_count=seatCount;
        const booking_date = bookingDate
        const resp = await axios.post(`https://airline-production.up.railway.app/booking`, {
            surname, 
            given_name, 
            address, 
            telephone, 
            flight_date, 
            seat_count,
            origin,
            booking_date,
            destination,
            price
        })
        console.log({ respss:resp });
    }
    return (
        <>
        <Box width='100%' height='100vh' >
        <Center>
                    <Box flexDir="column" mr="500px" width="30%" mt='50px' border='2px solid'>
                <Flex bg="#fff" flexDir="column">
                    <Center>
                        <Text
                            fontSize="18px"
                            borderBottom="2px solid #f1f1f1"
                            fontWeight="bold"
                        >
                            Add Your Booking Details
            </Text>
                    </Center>
                    <Box width="100%" ml="20px">
                        <FormControl >
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                                First Name
              </FormLabel>
                            <Input
                                placeholder="brand"
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>

                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                                color=""
                            >
                               Lastname
              </FormLabel>
                            <Input
                                
                                width="80%"
                                height="30px"
                                mt="4px"
                                fontSize="14px"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </FormControl>
                                <FormControl mt="20px">
                                    <FormLabel
                                        fontSize="16px"
                                        textTransform="capitalize"
                                        fontWeight="bold"
                                        color=""
                                    >
                                        Address
              </FormLabel>
                                    <Input

                                        width="80%"
                                        height="30px"
                                        mt="4px"
                                        fontSize="14px"
                                        value={addrss}
                                        onChange={(e) => setAddrss(e.target.value)}
                                    />
                                </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                                origin
              </FormLabel>
                            <Input
                                
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={origin}
                                onChange={(e) => setOrigin(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                                Telephone
              </FormLabel>
                            <Input
                              
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                            Seat Count
              </FormLabel>
                            <Input
                               
                                width="80%"
                                height="30px"
                                value={seatCount}
                                onChange={(e) => setSeatCount(e.target.value)}
                                mt="4px"
                                fontSize="14px"
                            />
                        </FormControl>
                                <FormControl mt="20px">
                                    <FormLabel
                                        fontSize="16px"
                                        textTransform="capitalize"
                                        fontWeight="bold"
                                    >
                                        Price
              </FormLabel>
                                    <Input

                                        width="80%"
                                        height="30px"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        mt="4px"
                                        fontSize="14px"
                                    />
                                </FormControl>
                                <FormControl mt="20px">
                                    <FormLabel
                                        fontSize="16px"
                                        textTransform="capitalize"
                                        fontWeight="bold"
                                    >
                                        Flight Date
              </FormLabel>
                                    <Input
                                        type='date'  
                                        width="80%"
                                        height="30px"
                                        value={flightDate}
                                        onChange={(e) => setFlightDate(e.target.value)}
                                        mt="4px"
                                        fontSize="14px"
                                    />
                                </FormControl>
                                <FormControl mt="20px">
                                    <FormLabel
                                        fontSize="16px"
                                        textTransform="capitalize"
                                        fontWeight="bold"
                                    >
                                        Booking Date
              </FormLabel>
                                    <Input
                                       type='date'
                                        width="80%"
                                        height="30px"
                                        value={bookingDate}
                                        onChange={(e) => setBkingDate(e.target.value)}
                                        mt="4px"
                                        fontSize="14px"
                                    />
                                </FormControl>
                                <FormControl mt="20px">
                                    <FormLabel
                                        fontSize="16px"
                                        textTransform="capitalize"
                                        fontWeight="bold"
                                    >
                                        destination
              </FormLabel>
                                    <Input
                                        
                                        width="80%"
                                        height="30px"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        mt="4px"
                                        fontSize="14px"
                                    />
                                </FormControl>
                                
                        </Box>
                            <Flex flexDir="row" mt="20px" justifyContent="center" p="10px">
                                <Button
                                    width="100%"
                                    backgroundColor='#87CEEB'
                                    height="40px"
                                    fontSize='16px'
                                   fontWeight='600'
                                   color='#fff'
                                   border='none'
                                   mr='17px'
                                    onClick={() =>{
                                       
                                        bookingDetails();
                                        reset();
                                    }}
                                >
                                    Save
            </Button>
                            
                            </Flex>
                        </Flex>
                        </Box>
                </Center>
                        </Box>
        </>
    )
};

export default Booking;

