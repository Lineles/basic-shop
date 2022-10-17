import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Homepage from "./Components/Homepage/Homepage";
import './App.css';

function App() {
  return (
    <div className="App">

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<Cart />} />
          </Routes>


    </div>
  );
}

export default App;
