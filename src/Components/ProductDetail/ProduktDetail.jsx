import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import "./ProductDetail.css"

function ProductDetail (props) {

    const [selectetProduct, setSelectetProduct] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setSelectetProduct(response.data))
    }, );
    return(

        <div>
                <img className="Products-image" src={selectetProduct?.image} alt={selectetProduct?.title} />
                <h1 className="Products-h1"> This is our {selectetProduct?.title} </h1>
                <p>{selectetProduct?.description}</p>
                <p>{selectetProduct?.price}</p>
                <button onClick={() => props.AddProductToCart(selectetProduct)}>Add to Cart</button>
        </div>
    )
}; 


export default  ProductDetail ; 