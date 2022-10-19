import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import Cart from "./Components/Cart/Cart";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import ProductDetail from "./Components/ProductDetail/ProduktDetail";

import './App.css';
import { useState } from "react";

function App() {

  const [ProductSerchValue, setProductSerchValue] = useState('')
  const [CartProducts, setCartProducts] = useState([])

  function AddProductToCart (productToAdd) {

    const existingProduct = CartProducts.find(product => product.id === productToAdd.id)
      if(existingProduct !== undefined){
        handleProductQuantity(existingProduct, true)

      } else {
        setCartProducts([...CartProducts, {...productToAdd, quantity: 1}])
      }
  }


  function handleProductQuantity (productToChangeQuantity, increasQuantity) {
      if(increasQuantity){
        productToChangeQuantity.quantity += 1;
      }else{
        productToChangeQuantity.quantity -= 1;
      }

        const newCartProductsArray = CartProducts.map(product => 
          product.id === productToChangeQuantity.id ? 
          {...productToChangeQuantity, quantity: productToChangeQuantity.quantity} : product
          )
          setCartProducts(newCartProductsArray)
  }


  function RemoveProductfromCart (productToRemove) {
    const newCartProductsArray = CartProducts.filter(product => product.id !== productToRemove.id)
    setCartProducts(newCartProductsArray)
  }


  function HandleProductSerch (SerchInputValue) {
    setProductSerchValue(SerchInputValue)
  }


  return (
    <Router>
    <Navbar HandleProductSerch={HandleProductSerch} /> 
    
      <Routes> 
        <Route exact path="/products" element={<Homepage AddProductToCart={AddProductToCart} ProductSerchValue={ProductSerchValue} /> } /> 
        <Route path="/Cart" element={<Cart CartProducts={CartProducts} RemoveProductfromCart={RemoveProductfromCart} AddProductToCart={AddProductToCart} handleProductQuantity={handleProductQuantity}/> }/>
        <Route path="/products/:id" element={<ProductDetail AddProductToCart={AddProductToCart}/>} />
        <Route path="*" element={<Navigate to="/products" replace /> } /> 
      </Routes>   
          
  </Router> 

   
  );
}

export default App;
