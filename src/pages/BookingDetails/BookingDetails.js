
import {
    Box,Text
} from '@chakra-ui/react';
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const BookingDetails = () => {
    let { bookingId}= useParams();
    console.log({ idss: bookingId});
    const [singleData, setSingleData] = useState([]);
    const getsingleData = useCallback(async () => {
        const resp = await axios.get(`https://airline-production.up.railway.app/booking/${bookingId}`);
        console.log({ book: resp?.data });
        setSingleData(resp?.data)
    }, []);

    useEffect(() => {

        getsingleData();
    }, [])
    return (
        <>
        


            <Box border='2px solid #20A39E'>

                <Text className=''>{singleData[0].surname}{"  "}{singleData[0].given_name}</Text>
                <Text className=''>
                    {singleData[0].address}
                </Text>
                <Text>Phone:{singleData[0].telephone}</Text>
            </Box>
        </>
    )
};

export default BookingDetails;