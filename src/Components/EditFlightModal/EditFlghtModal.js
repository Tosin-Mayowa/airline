import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Input,

    Text,

} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
export default function EditFlightModal({ isOpen, handleIsOpen, flightData}) {
    const { id,
        airplane_id, origin, destination,
        arrival_time, departure_time, pilot_id,
        passenger_id, staff_id
    } = flightData;
  
    const [airplaneId, setAirplaneId] = useState(airplane_id);
    const [orign, setOrign] = useState(origin);
    const [depatureTime, setDepartureTime] = useState(departure_time);
    const [arrival, setArrival] = useState(arrival_time);
    const [staffId, setStaffId] = useState(staff_id);
    const [destinatn, setDestination] = useState(destination);
    const [passengerId, setpassengerId] = useState(passenger_id)
    const [pilotId, setPilotId] = useState(pilot_id)

 

    const editFlightDetails = async () => {
       
        const airplane_id = airplaneId;
        const origin = orign;
        const departure_time = depatureTime;
        const arrival_time = arrival;
        const staff_id =staffId;
        const destination= destinatn;
        const pilot_id=pilotId;
        const passenger_id = passengerId
        console.log({
            airplane_id, origin, destination,
            arrival_time, departure_time, pilot_id,
            passenger_id, staff_id});
        const resp = await axios.patch(`https://airline-production.up.railway.app/flights/${id}`, {
            airplane_id, origin, destination, 
            arrival_time, departure_time,pilot_id,
            passenger_id,staff_id
        })
console.log({resp});
    }
  



    return (
        <>
            <Box flexDir="column" mr="500px" width="30%" overflow='scroll'>
                <Flex bg="#fff" flexDir="column">
                    <Center>
                        <Text
                            fontSize="18px"
                            borderBottom="2px solid #f1f1f1"
                            fontWeight="bold"
                        >
                          
                            Edit Flight Details
                        
                        </Text>
                    </Center>
                    <Box width="100%" ml="20px">


                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                                color=""
                            >
                               
                    Origin
                              
                            </FormLabel>
                            <Input

                                width="80%"
                                height="30px"
                                mt="4px"
                                fontSize="14px"
                                value={orign??origin}
                                onChange={(e)=>setOrign(e.target.value)}
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
                                mt="4px"
                                value={destinatn??destination}
                                onChange={(e) => setDestination(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
            
                                passengerId
                               
                            </FormLabel>
                            <Input
                                
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={passengerId??passenger_id}
                                onChange={(e)=>setpassengerId(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                              
                                StaffId

                            </FormLabel>
                            <Input
                                
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={staffId??staff_id}
                                onChange={(e)=>setStaffId(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                                
                                pilotId
                                
                            </FormLabel>
                            <Input

                                width="80%"
                                height="30px"
                                mt="4px"
                                value={pilotId??pilot_id}
                                onChange={(e)=>setPilotId(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >


                                Departure Time

                            </FormLabel>
                            <Input
                                placeholder="09:34:55"
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={depatureTime ?? departure_time}
                                onChange={(e) => setDepartureTime(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >

                                
                                Arrival Time

                            </FormLabel>
                            <Input
                            placeholder="09:34:55"
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={arrival ?? arrival_time}
                                onChange={(e)=>setArrival(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                        
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >


                                Airplane Id

                            </FormLabel>
                            <Input
                               
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={airplaneId ?? airplane_id}
                                onChange={(e) => setAirplaneId(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                    </Box>
                    <Flex flexDir="row" mt="20px" justifyContent="center" p="10px">
                        <Button
                            width="40%"
                            mr={3}
                            height="50px"
                            onClick={(e) => {
                                editFlightDetails();
                                handleIsOpen(isOpen);

                            }}
                        >
                            Save
            </Button>
                        <Button
                            width="60%"
                            height="50px"
                            onClick={() => {

                                handleIsOpen(isOpen);
                            }}
                        >
                            Cancel
            </Button>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

/* airplane_id
:
3
arrival_time
:
"07:30:00"
departure_time
:
"05:30:00"
destination
:
"New Jersey"
flight_date
:
"2023-01-12T00:00:00.000Z"
id
:
42
origin
:
"Bournemouth"
passenger_id
:
6
pilot_id
:
1
staff_id
:
1 

id
:
3
manufacturer
:
"Airbus"
model_name
:
"Airbus A380"
model_number
:
"800"
number_of_seats
:
"600"


*/