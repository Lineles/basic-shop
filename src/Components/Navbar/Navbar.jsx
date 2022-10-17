import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar () {

    return(

        <div>
            <h1>nav</h1>
            <Link to="/" >Homepage</Link>
            <Link to="/Cart" >Cart</Link>
            
        </div>
    )
}; 


export default  Navbar  ; 