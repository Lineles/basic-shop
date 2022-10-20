import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar (props) {


    const [serchProduct, setProductSerch] = useState('')

    const handleSerchInput = (event) => {
        event.preventDefault()
        props.HandleProductSerch(serchProduct)
    }

    function SerchInput (input) {
        if (input !== '') {
            setProductSerch(input)
        } else {
            setProductSerch(input)
            props.HandleProductSerch(serchProduct)
        }
    }


    return(

        <div className="Navbar-container">
            
            <Link to="/" className="Navbar-Link">Homepage</Link>
            <Link to="/Cart" className="Navbar-Link">Cart</Link>
            

            <form onSubmit={handleSerchInput}> 
                <input 
                type="text" 
                placeholder="Find your Product" 
                onChange={(event) => SerchInput(event.target.value)}
                value={serchProduct}
                />
                <button>Find</button>
            </form>
        </div>
    )
}; 


export default  Navbar  ; 