import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Cart from "./Components/Cart/Cart";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";

import './App.css';

function App() {


  return (
    <Router>
    <Navbar /> 
    
      <Routes> 
        <Route path="/" element={<Homepage />  } /> 
        <Route path="/Cart" element={<Cart /> }/>
       
      </Routes>   
          
  </Router> 

   
  );
}

export default App;
