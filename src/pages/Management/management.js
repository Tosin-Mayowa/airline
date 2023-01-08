import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"

import StaffTable from "../../Components/StaffTable/StaffTable";
import FlightTable from "../../Components/FlghtTable/FlightTable";
import AircraftTable from "../../Components/AircraftTable/AircraftTable";






const Management = () => {



    return (
        <>

            <Tabs variant='enclosed' mt="100px" ml='20px' width='100%' >
                <TabList width='100%' borderBottom='2px solid #f1f1f1'>
                    <Tab fontSize='18px'>Manage Staff</Tab>
                    <Tab fontSize='18px'>Manage Flight</Tab>
                    <Tab fontSize='18px'>Manage Aircraft</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <StaffTable />
                    </TabPanel>
                    <TabPanel>
                        <FlightTable />
                    </TabPanel>
                    <TabPanel>
                        <AircraftTable />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )




}

export default Management;
