


import "./Products.css"

function Products (props) {
    
    return(

        <div className="Products-div"> 
            <img className="Products-image" src={props.image} alt={props.title} />
            <h1 className="Products-h1"> This is our {props.title} </h1>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>

    ); 
}

export default Products; 