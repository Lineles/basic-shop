import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar () {

    return(

        <div className="Navbar-container">
            
            <Link to="/" className="Navbar-Link">Homepage</Link>
            <Link to="/Cart" className="Navbar-Link">Cart</Link>
            
        </div>
    )
}; 


export default  Navbar  ; 