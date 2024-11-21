import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Pages/Footer/Footer";
import Header from "./Components/Pages/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import AddProduct from "./Components/Pages/AddProduct/AddProduct";
import UpdateProduct from "./Components/Pages/UpdateProduct/UpdateProduct";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";

function App() {
  return (
    <div>
      {/* <h1 className="text-center">Ecommerce Website</h1> */}
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/updateproduct" element={<UpdateProduct/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
