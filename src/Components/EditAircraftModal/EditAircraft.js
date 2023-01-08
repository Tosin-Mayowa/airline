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
export default function EditAirModal({ isOpen, handleIsOpen, airData}) {
    const { id, 
        manufacturer,
        model_number,
        model_name,
        number_of_seats
    } = airData;
  
    const [manufacture, setManufacture] = useState(manufacturer);
    const [modelNum, setModelNum] = useState(model_number);
    const [numSeat, setNumSeat] = useState(number_of_seats);
    const [modelName, setModelName] = useState(model_name);
   


 

    const editAircraftDetails = async () => {
        
        const manufacturer = manufacture;
        const model_number = modelNum;
        const model_name = modelName;
        const number_of_seats =numSeat;
       
       
       
        const resp = await axios.patch(`https://airline-production.up.railway.app/aircraft/${id}`, {
            manufacturer ,
             model_number ,
            model_name,
            number_of_seats
        })

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
                               
                    Model Name
                              
                            </FormLabel>
                            <Input

                                width="80%"
                                height="30px"
                                mt="4px"
                                fontSize="14px"
                                value={modelName??model_name}
                                onChange={(e)=>setModelName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                                Model Number
                                
                            </FormLabel>
                            <Input

                                width="80%"
                                height="30px"
                                mt="4px"
                                value={modelNum??model_number}
                                onChange={(e) => setModelNum(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
            
                                manufacturer
                               
                            </FormLabel>
                            <Input
                                
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={manufacture ?? manufacturer}
                                onChange={(e)=>setManufacture(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                              
                                Number of seat

                            </FormLabel>
                            <Input
                                
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={numSeat??number_of_seats}
                                onChange={(e)=>setNumSeat(e.target.value)}
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
                                editAircraftDetails();
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