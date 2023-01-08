import NavBar from "./pages/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewBooking from "./pages/ViewBooking/ViewBooking"
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import Management from "./pages/Management/management"
import BookingDetails from "./pages/BookingDetails/BookingDetails"
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
const App=()=>{

  return (
    <>
      <BrowserRouter>
<ErrorBoundary>
    <NavBar/>
    
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/booking" element={<Booking />} />
          <Route path="/viewbooking" element={<ViewBooking />} />
          <Route path="/viewbooking/:bookingId" element={<BookingDetails />} />
          <Route path="/management" element={<Management />} />
      </Routes>
        </ErrorBoundary>
    </BrowserRouter>
</>
  )
}
export default App;
