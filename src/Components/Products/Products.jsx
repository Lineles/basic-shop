
import { Link } from "react-router-dom"

import "./Products.css"

function Products (props) {
    
    return(

        <Link 
            to={`/products/${props.id}`}
            className="Products-div"> 
            <div className="Products-image-div">
                <img className="Products-image" src={props.image} alt={props.title} />
            </div>
                <h1 className="Products-h1"> {props.title} </h1>
                {/* <p className="Products-description">{props.description}</p> */}
            <div>
                <p className="Products-price">{props.price} €</p>
                
            </div>
        </Link>

    ); 
}

export default Products; 