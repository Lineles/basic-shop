import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
            
            return acc + (product.price * product.quantity).toFixed(2)
        }, 0);
        return total
    }

    
    return(

        <div className="Cart-Container">

            <h1> Cart </h1>
            {props.CartProducts.map(item => (
                <div className="CartItem">
                    <div className="CartItem-img-box">
                        <img src={item.image} alt={item.title} className="CartItem-img"></img>
                    </div>
                    <h1 className="CartItem-title">{item.title}</h1>
                    <p className="CartItem-quantity">{item.quantity}</p>
                    <p onClick={() => props.AddProductToCart(item)}>+</p>
                    {item.quantity >= 2 && <p onClick={() => props.handleProductQuantity(item, false)}>-</p>}
                    <p className="CartItem-price">{item.price}€</p>
                    <button className="ProductDetail-RemoveItem-button" onClick={() => props.RemoveProductfromCart(item)}>Remove Product</button>
                </div>
            )
            )}
                    

          { props.CartProducts.length ? 
                    
                    (   <div>
                            <h1>Total: {calculateTotal()} </h1>
                            <button onClick={() => setPaymentPopup(true)}> Checkout </button>
                        </div>  )
                        :
                    ( 
                        <div>
                            <h1>There are no Items in Cart</h1> 
                            <Link 
                                to="/products"
                            ><button>Back to Shopping</button></Link>
                        </div>
                    )   
          }
          
          
          {isPaymentPopupDisplayd ? (
                    <CartPopup total={calculateTotal()} ConfifmOrder={ConfifmOrder}  />
                    ) : null}
        </div>
    )
}; 


export default Cart ; 