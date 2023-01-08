import { Flex,Box } from '@chakra-ui/react';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditStaffModal from '../EditStaffModal/EditStaffModal'
import { FiEdit2 } from "react-icons/fi";
import './actionModal.css'
import {useState} from 'react';
import EditAirModal from '../EditAircraftModal/EditAircraft';
import EditFlightModal from '../EditFlightModal/EditFlghtModal';
import EditBookingModal from '../EditBookingModal/EditBookingModal';
const ActionButtons = ({ editData, airData, flightData, bookingData}) => {
    
    console.log({ bookingData});
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const handleIsOpenEdit = (val) => {
        setIsOpenEdit(!val);

    };
    return (
        <>
        {editData&&<Flex justifyContent="space-between" alignItems="center" data-testid="role-action">
                <DeleteButton editData={editData}  />
            <FiEdit2
                    className='Comp'
                    onClick={() => {
                        handleIsOpenEdit(isOpenEdit);
                    }}
            />
                <Box className={isOpenEdit ? 'Modal' : ""}>
                    {isOpenEdit && (
                        <EditStaffModal isOpen={isOpenEdit} handleIsOpen={handleIsOpenEdit} editData={editData} />
                    )}
                </Box>
             
        </Flex>}

        {airData&&<Flex justifyContent="space-between" alignItems="center" data-testid="role-action">
                <DeleteButton airData={airData}  />
                <FiEdit2
                    className='Comp'
                    onClick={() => {
                        handleIsOpenEdit(isOpenEdit);
                    }}
            />
                <Box className={isOpenEdit ? 'Modal' : ""}>
                    {isOpenEdit && (
                        <EditAirModal isOpen={isOpenEdit} handleIsOpen={handleIsOpenEdit} airData={airData} />
                    )}
                </Box>
             
        </Flex>}
        
            {flightData && <Flex justifyContent="space-between" alignItems="center" data-testid="role-action">
                <DeleteButton flightData={flightData} />
                <FiEdit2
                    className='Comp'
                    onClick={() => {
                        handleIsOpenEdit(isOpenEdit);
                    }}
                />
                <Box className={isOpenEdit ? 'Modal' : ""}>
                    {isOpenEdit && (
                        <EditFlightModal isOpen={isOpenEdit} handleIsOpen={handleIsOpenEdit} flightData={flightData} />
                    )}
                </Box>

            </Flex>}
            {bookingData && <Flex justifyContent="space-between" alignItems="center" data-testid="role-action">
                <DeleteButton bookingData={bookingData} />
                <FiEdit2
                    className='Compon'
                    onClick={() => {
                        handleIsOpenEdit(isOpenEdit);
                    }}
                />
                <Box className={isOpenEdit ? 'Modal' : ""}>
                    {isOpenEdit && (
                        <EditBookingModal isOpen={isOpenEdit} handleIsOpen={handleIsOpenEdit} bookingData={bookingData} />
                    )}
                </Box>

            </Flex>}
        </>
    );
};

export default ActionButtons;