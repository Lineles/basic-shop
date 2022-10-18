import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import Cart from "./Components/Cart/Cart";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import ProductDetail from "./Components/ProductDetail/ProduktDetail";

import './App.css';
import { useState } from "react";

function App() {


  const [CartProducts, setCartProducts] = useState([])

  function AddProductToCart (productToAdd) {
    setCartProducts([...CartProducts, productToAdd])
  }


  return (
    <Router>
    <Navbar /> 
    
      <Routes> 
        <Route exact path="/products" element={<Homepage /> } /> 
        <Route path="/Cart" element={<Cart CartProducts={CartProducts}/> }/>
        <Route path="/products/:id" element={<ProductDetail AddProductToCart={AddProductToCart}/>} />
        <Route path="*" element={<Navigate to="/products" replace /> } /> 
      </Routes>   
          
  </Router> 

   
  );
}

export default App;
