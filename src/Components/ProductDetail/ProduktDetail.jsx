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
    },  );
    return(

        <div className="ProductDetail-Container">
                <img className="ProductDetail-image" src={selectetProduct?.image} alt={selectetProduct?.title} />
                <div className="ProductDetail-Info-box">
                    <h1 className="ProductDetail-Title"> This is our {selectetProduct?.title} </h1>
                    <p className="ProductDetail-description">{selectetProduct?.description}</p>
                    <p className="ProductDetail-price">{selectetProduct?.price}</p>
                    <button className="ProductDetail-addToCart-button" onClick={() => props.AddProductToCart(selectetProduct)}>Add to Cart</button>
                </div>  
        </div>
    )
}; 


export default  ProductDetail ; 