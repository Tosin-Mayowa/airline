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
import { useEffect } from "react";
export default function EditStaffModal({ isOpen, handleIsOpen, editData}) {
    console.log({ editData});
    const { id, given_name, category, salary, surname, address, telephone } = editData;
    console.log({ id });
    const [firstName, setFirstName] = useState(given_name);
    const [lastName, setLastName] = useState(surname);
    const [phone, setPhone] = useState(telephone);
    const [staffSalary, setStaffSalary] = useState(salary);
    const [position, setPosition] = useState(category);
    const [addrss, setAddrss] = useState(address);

console.log({addrss});
 

    const editStaffDetails = async () => {
        console.log({ids:id});
        const given_name = firstName;
        const category = position;
        const address = addrss;
        const telephone =phone;
        const salary =staffSalary;
        const surname = lastName;
        const resp = await axios.patch(`https://airline-production.up.railway.app/staff/${id}`, {
            surname, given_name, address, telephone, salary, category
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
                          
                            Edit Staff Details
                        
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
                               
                            Firstname
                              
                            </FormLabel>
                            <Input

                                width="80%"
                                height="30px"
                                mt="4px"
                                fontSize="14px"
                                value={firstName??given_name}
                                onChange={(e)=>setFirstName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                                Surname
                                
                            </FormLabel>
                            <Input

                                width="80%"
                                height="30px"
                                mt="4px"
                                value={lastName??surname}
                                onChange={(e) => setLastName(e.target.value)}
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
                                value={phone??telephone}
                                onChange={(e)=>setPhone(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                              
                                Salary

                            </FormLabel>
                            <Input
                                
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={staffSalary??salary}
                                onChange={(e)=>setStaffSalary(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                                
                                Position
                                
                            </FormLabel>
                            <Input

                                width="80%"
                                height="30px"
                                mt="4px"
                                value={position??category}
                                onChange={(e)=>setPosition(e.target.value)}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >

                                
                                Address

                            </FormLabel>
                            <Input

                                width="80%"
                                height="30px"
                                mt="4px"
                                value={addrss ?? address}
                                onChange={(e)=>setAddrss(e.target.value)}
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
                                editStaffDetails();
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