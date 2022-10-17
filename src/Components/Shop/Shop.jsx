import React from "react";
import axios from "axios";

import Products from "../Products/Products";

import "./Shop.css"

function Shop () {

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
             {product.map(
                function(product) {
                    return <Products
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    description={product.description} /> 
                }
            )} 


        </div>
    )
}; 


export default Shop; 