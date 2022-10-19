import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar (props) {


    const [serchProduct, setProductSerch] = useState

    const handleSerchInput = (event) => {
        event.preventDefault();
        props.handleSerchInput(serchProduct); 
    }


    return(

        <div className="Navbar-container">
            
            <Link to="/" className="Navbar-Link">Homepage</Link>
            <Link to="/Cart" className="Navbar-Link">Cart</Link>
            

            <form onSubmit={handleSerchInput}> 
                <input 
                type="text" 
                placeholder="Find your Product" 
                onChange={(event) = setProductSerch(event.target.value)}
                value={serchProduct }
                />
                <button>Find</button>
            </form>
        </div>
    )
}; 


export default  Navbar  ; 