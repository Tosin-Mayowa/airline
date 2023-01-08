import {
    Box,
    Button,
    Center,
    Flex,
    Text,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import './Delete.css'

const DeleteButton = ({ flightData, editData, airData,bookingData}) => {
    const id = editData ? editData.id : airData ? airData.id : bookingData ? bookingData.id:flightData.id
   
    const [isDelete, setIsDelete] = useState(false);
    const [hasDelete, setHasDelete] = useState(false);
   
   



    const handleIsDelete = (val) => {
        setIsDelete(!val)
    }

    const deleteStaffApi = async () => {
        const endPoint = editData ? 'staff' : airData ? 'aircraft' : bookingData ? 'booking': 'flights'
        const response = await axios.delete(`https://airline-production.up.railway.app/${endPoint}/${id}`);
        console.log('resp',response);

        if (response) {
            setHasDelete(true)
        }
    }
  
    return (
        <>

            <Box className={isDelete ? 'ModalX' : ""}>
                {isDelete ? (
                    <Box flexDir="column" mr="500px" width="50%">
                        <Flex bg="#fff" flexDir="column">
                            <Center>
                                <Text
                                    fontSize="18px"
                                    borderBottom="2px solid #D6DDEB"
                                    fontWeight="bold"
                                >
                                    Delete Data
                </Text>
                            </Center>
                            <Center>
                                <Text
                                    color="#636E95"
                                    lineHeight="150%"
                                    fontSize="16px"
                                    fontWeight="400"
                                    mt="24px"
                                    padding='10px'
                                >
                                    You are about to delete <strong>{id}</strong>. Are you
                sure you want to delete this role.
              </Text>
                            </Center>
                            <Flex flexDir="row" mt="20px" justifyContent="center" p="10px">
                                <Button
                                    width="40%"
                                    mr={3}
                                    height="50px"
                                    onClick={() => {
                                        deleteStaffApi();
                                        handleIsDelete(isDelete);

                                    }}
                                >
                                    yes
                </Button>
                                <Button
                                    width="60%"
                                    height="50px"
                                    onClick={() => {
                                        handleIsDelete(isDelete);
                                    }}
                                >
                                    Cancel
                </Button>
                            </Flex>
                        </Flex>
                    </Box>
                ) : (
                        <AiOutlineDelete
                            onClick={() => {

                                handleIsDelete(isDelete);
                            }}
                        />
                    )}
            </Box>
        </>
    );
};
export default DeleteButton;
