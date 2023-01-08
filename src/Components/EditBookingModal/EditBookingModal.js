
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
import { useState } from 'react';
import axios from 'axios';
const EditBookingModal = ({ isOpen, handleIsOpen, bookingData}) => {
    console.log({ bookingDatas: bookingData });
    const {
        id,
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
    } = bookingData;
    const [firstName, setFirstName] = useState(given_name);
    const [lastName, setLastName] = useState(surname);
    const [phone, setPhone] = useState(telephone);
    const [flightDate, setFlightDate] = useState(flight_date.slice(0, 10));
    const [seatCount, setSeatCount] = useState(seat_count);
    const [addrss, setAddrss] = useState(address);
    const [bookingDate, setBkingDate] = useState(booking_date.slice(0, 10));
    const [prce, setPrice] = useState(price);
    const [orign, setOrigin] = useState(origin);
    const [destinatn, setDestination] = useState(destination);
    console.log('addres', flightDate);
    const bookingDetails = async () => {

        const given_name = firstName;

        const address = addrss;
        const telephone = phone;
        const flight_date = flightDate;
        const surname = lastName;
        const seat_count = seatCount;
        const booking_date = bookingDate
        const resp = await axios.patch(`https://airline-production.up.railway.app/booking/${id}`, {
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
        console.log({ respss: resp });
    }
    return (
        <>
            <Box width='100%' height='100vh' overflow='scroll' >
                <Center>
                    <Box flexDir="column" mr="500px" width="30%" mt='50px' border='2px solid'>
                        <Flex bg="#fff" flexDir="column">
                            <Center>
                                <Text
                                    fontSize="18px"
                                    borderBottom="2px solid #f1f1f1"
                                    fontWeight="bold"
                                >
                                    Edit Booking Details
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
                                        value={orign}
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
                                        value={prce}
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
                                        value={destinatn}
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
                                    onClick={() => {

                                        bookingDetails();
                                        handleIsOpen(isOpen);
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

export default EditBookingModal;

