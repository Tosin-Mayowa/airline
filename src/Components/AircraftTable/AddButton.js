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
import {  useState } from "react";
import axios from "axios";
export default function AddButton({ isOpen, handleIsOpen, aircraft,staff,flight }) {
   
    const [manufacture, setManufacture] = useState("");
    const [modelNum, setModelNum] = useState("");
    const [numSeat, setNumSeat] = useState("");
    const [modelName, setModelName] = useState("");
   
    
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [telephone, setTelephone] = useState("");
    const [salary, setSalary] = useState("");
    const [position, setPosition] = useState("");
    const [address, setAddress] = useState("");

   
    const [airplaneId, setAirplaneId] = useState("");
    const [orign, setOrigin] = useState("");
    const [depatureTime, setDepartureTime] = useState("");
    const [arrival, setArrival] = useState("");
    const [destinatn, setDestination] = useState("");
    const [staffId, setStaffId] = useState("");
    const [passengerId, setpassengerId] = useState("");
    const [pilotId, setPilotId] = useState("");
    const [flightDate, setFlightDate] = useState("");


 
   const handleManuf= (e) => {
        setManufacture(e.target.value)
    }
  const handleModel = (e) => {
        setModelNum(e.target.value)
    }
  const handleSeat = (e) => {
        setNumSeat(e.target.value)
    }
   const handleModelName = (e) => {
       setModelName(e.target.value)
    }
 

    const handlePhn = (e) => {
        setTelephone(e.target.value)
    }
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleSurname = (e) => {
        setSurname(e.target.value)
    }
    const handleSalary = (e) => {
        setSalary(e.target.value)
    }
    const handlePosition = (e) => {
        setPosition(e.target.value)
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

   //flight
    const handleAirplaneId = (e) => {
        setAirplaneId(e.target.value)
    }
    const handleStaffId = (e) => {
        setStaffId(e.target.value)
    }
    const handlePassId = (e) => {
        setpassengerId(e.target.value)
    }
    const handleDepart = (e) => {
        setDepartureTime(e.target.value)
    }
    const handleOrig = (e) => {
        setOrigin(e.target.value)
    }
    const handleArrival = (e) => {
        setArrival(e.target.value)
    }
    const handlePilotId = (e) => {
        setPilotId(e.target.value)
    }
    const handleDestination = (e) => {
        setDestination(e.target.value)
    }
    const handleFlightDate = (e) => {
        setFlightDate(e.target.value)
    }
const sendStaffDetails= async()=>{
    const given_name=firstName;
    const category=position;
    const resp = await axios.post('https://airline-production.up.railway.app/staff',{
        given_name, category,salary,surname,address,telephone
    })
  
}

    const sendFlightDetails = async () => {
      const airplane_id = airplaneId;
        const origin = orign;
        const departure_time = depatureTime;
        const arrival_time = arrival;
        const staff_id =staffId;
        const destination= destinatn;
        const pilot_id=pilotId;
        const passenger_id = passengerId;
      const  flight_date=flightDate
        const resp = await axios.post('https://airline-production.up.railway.app/flights', {
            origin,destination, flight_date, passenger_id,pilot_id, staff_id,airplane_id,arrival_time, departure_time,pilot_id,
        })
console.log({flight:resp});
    }

    const sendAircraftDetails = async () => {
        const manufacturer = manufacture;
        const model_number = modelNum;
        const model_name = modelName;
        const number_of_seats = numSeat;
        const resp = await axios.post('https://airline-production.up.railway.app/aircraft', {
            model_name, model_number, manufacturer, number_of_seats
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
                            {aircraft && 'Add Aircraft Details'}
                            {staff && 'Add Staff Details'}
                            {flight && 'Add Flight Details'}
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
                                {aircraft && 'Manufacturer'}
                                {staff && 'Firstname'}
                                {flight && 'AirplaneID'}
              </FormLabel>
                            <Input
                               
                                width="80%"
                                height="30px"
                                mt="4px"
                                fontSize="14px"
                                value={aircraft?manufacture:staff?firstName:airplaneId}
                                onChange={aircraft?handleManuf:staff?handleFirstName:handleAirplaneId}
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                                {aircraft && 'Modelnum'}
                                {staff && 'Surname'}
                                {flight && 'Origin'}
              </FormLabel>
                            <Input
                               
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={aircraft?modelNum:staff?surname:orign}
                                onChange={aircraft?handleModel:staff?handleSurname:handleOrig}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                                {flight && 'pilotId'}
                                {staff && 'Position'}
                                {aircraft && 'ModelName'}
                            </FormLabel>
                            <Input
                               
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={aircraft?modelName:staff?position:pilotId}
                                onChange={aircraft ?handleModelName:staff?handlePosition:handlePilotId}
                                fontSize="14px"
                            />
                        </FormControl>
                        <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                                {aircraft && 'Numberofseat'}
                                {staff && 'Telephone'}
                                {flight && 'Departuretime'}
                            </FormLabel>
                            <Input
                                placeholder={flight && "09:34:55"}
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={aircraft ? numSeat : staff ? telephone : depatureTime}
                                onChange={aircraft ? handleSeat : staff ? handlePhn : handleDepart}
                                fontSize="14px"
                            />
                        </FormControl>
                        {(staff || flight) && <FormControl mt="20px">
                            <FormControl mt="20px">
                                <FormLabel
                                    fontSize="16px"
                                    textTransform="capitalize"
                                    fontWeight="bold"
                                >

                                    {flight && 'Arrivaltime'}
                                    {staff && 'Salary'}

                                </FormLabel>
                                <Input
                                    placeholder={flight && "09:34:55"}
                                    width="80%"
                                    height="30px"
                                    mt="4px"
                                    value={staff ? salary : arrival}
                                    onChange={staff ? handleSalary : handleArrival}
                                    fontSize="14px"
                                />
                            </FormControl>
                        <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                               
                                {flight && 'Destination'}
                                {staff && 'Address'}
                                
                            </FormLabel>
                            <Input
                               
                                width="80%"
                                height="30px"
                                mt="4px"
                                value={address??destinatn}
                                onChange={handleAddress??handleDestination}
                                fontSize="14px"
                            />
                        </FormControl>}
                        {flight && (
                            <>
                            <FormControl mt="20px">
                            <FormLabel
                                fontSize="16px"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >

                           Passenger id

                            </FormLabel>
                            <Input

                                width="80%"
                                height="30px"
                                mt="4px"
                                value={passengerId}
                                onChange={handlePassId}
                                fontSize="14px"
                            />
                        </FormControl>
                                <FormControl mt="20px">
                                    <FormLabel
                                        fontSize="16px"
                                        textTransform="capitalize"
                                        fontWeight="bold"
                                    >

                                        staff id
                                      

                                    </FormLabel>
                                    <Input

                                        width="80%"
                                        height="30px"
                                        mt="4px"
                                        value={staffId}
                                        onChange={handleStaffId}
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
                                        mt="4px"
                                        value={flightDate}
                                        onChange={handleFlightDate}
                                        fontSize="14px"
                                    />
                                </FormControl>
                        </>)
                    }
                        </Box>
                    <Flex flexDir="row" mt="20px" justifyContent="center" p="10px">
                        <Button
                            width="40%"
                            mr={3}
                            height="50px"
                            onClick={(e) => {
                                {staff && sendStaffDetails()};
                                { flight && sendFlightDetails() };
                                { aircraft && sendAircraftDetails() };
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