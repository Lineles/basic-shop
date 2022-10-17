import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import Cart from "./Components/Cart/Cart";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import ProductDetail from "./Components/ProductDetail/ProduktDetail";

import './App.css';

function App() {


  return (
    <Router>
    <Navbar /> 
    
      <Routes> 
        <Route exact path="/" element={<Homepage />  } /> 
        <Route path="/Cart" element={<Cart /> }/>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/" replace /> } /> 
      </Routes>   
          
  </Router> 

   
  );
}

export default App;
