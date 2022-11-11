import React from "react";
import { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";

import CartPopup from "../Popups/CartPopup";


import "./Cart.css"

function Cart (props) {

    const Navigate = useNavigate()
    const [isPaymentPopupDisplayd, setPaymentPopup] = useState(false)

    const ConfifmOrder = () => {
        props.ClearCartItems()
        setPaymentPopup(false)
        Navigate('/products')
    }

    const calculateTotal = () => {
        const total = props.CartProducts.reduce((acc, product) => {
            
            return ( acc + (product.price * product.quantity).toFixed(2))
        }, 0);
        return total
    }

    // const calculateTotal = () => {
    //     const total = JSON.parse(window.localStorage.getItem('cartProductsLocalStorage')).reduce((accumulator, product) => {
    //         return (accumulator + product.price * product.quantity)
    //     }, 0);
    //     return total;
    // }

    
    
    return(
        <div> 

        <div className="Cart-Container">

            <h1 className="Cart-H1"> Cart </h1>
            {props.CartProducts.map(item => (
                <div className="CartItem">
                    <div className="CartItem-img-box">
                        <img src={item.image} alt={item.title} className="CartItem-img"></img>
                    </div>
                    <h1 className="CartItem-title">{item.title}</h1>
                    <div className="CartItem-side-box">
                        <p className="CartItem-quantity">Quantity: {item.quantity}</p>
                        <div className="CartItem-quantity-box">
                            {item.quantity >= 2 && <button onClick={() => props.handleProductQuantity(item, false)} className="CartItem-quantity-button">-</button>}
                            <button onClick={() => props.AddProductToCart(item)} className="CartItem-quantity-button">+</button>
                        </div>
                        <p className="CartItem-price">{item.price}€</p>
                    </div>
                    <div className="ProductDetail-button-leist"> 
                        <button className="ProductDetail-RemoveItem-button" onClick={() => props.RemoveProductfromCart(item)}>Remove Product</button>
                    </div>
                </div>
            )
            )}
                    

          { props.CartProducts.length ? 
                    
                    (   <div className="Cart-Total-price-container">
                            <h1 className="Cart-Total-price">Total: {calculateTotal()} </h1>
                            <button onClick={() => setPaymentPopup(true)} className="Cart-Checkout-button"> Checkout </button>
                        </div>  )
                        :
                        ( 
                        <div className="Cart-Total-price-container">
                            <h1 className="Cart-Total-price">There are no Items in Cart</h1> 
                            <Link 
                                to="/products"
                                className="Cart-Checkout-button"
                            ><button>Back to Shopping</button></Link>
                        </div>
                    )   
          }
          
          
          {isPaymentPopupDisplayd ? (
              <CartPopup total={calculateTotal()} ConfifmOrder={ConfifmOrder}  className="Cart-"/>
              ) : null}
        </div>
        
           
        </div>
    )
}; 


export default Cart ; 