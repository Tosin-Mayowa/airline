import {  Link } from "react-router-dom";
import "./NavBar.css"
const NavBar = () => {
    return (
    
            <nav className="Nav">
                <div className="NavDiv">
                    <h2 className='Logo'>NOR AIRLINE</h2>
                    <ul className="ListParent">
                        <li className="List">
                        <Link to="/" className="Link">
                                Home
                            </Link>
                        </li>
                        <li className="List">
                        <Link to="/booking" className="Link">
                                Booking
                            </Link>
                        </li>
                    <li className="List">
                        <Link to="/viewbooking" className="Link">
                            View Bookings
                            </Link>
                    </li>
                   
                    <li >
                        <Link to="/management" className="Link">
                          Management
                        </Link>
                        
                    </li>
          </ul>
          </div>
          </nav>
        
    )
};

export default NavBar;