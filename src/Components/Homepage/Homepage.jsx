import React from "react";
import axios from "axios";

import Products from "../Products/Products";
// import Shop from "../Shop/Shop";

import "./Homepage.css"



function Homepage (props) {

    const [product, setProduct] = React.useState([]);

    const fetchProduct = () => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => setProduct(response.data))
    };
  
    React.useEffect(
        () => {
            fetchProduct()
        }, []
    )


    return(

        <div className="Shop-flex">
             {product.filter(
                item => props.ProductSerchValue !== '' ? 
                item.title.toLowerCase().includes(props.ProductSerchValue.toLowerCase()) ? item : null
                : item
             ).map(
                function(product) {
                    return <Products
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    description={product.description}
                    id={product.id} /> 
                    
                }
            )}  


        </div>
    )
}; 


export default Homepage; 