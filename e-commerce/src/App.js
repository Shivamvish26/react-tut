import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Pages/Footer/Footer";
import Header from "./Components/Pages/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import AddProduct from "./Components/Pages/AddProduct/AddProduct";
import UpdateProduct from "./Components/Pages/UpdateProduct/UpdateProduct";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Product from "./Components/Pages/Products/products";
import Signup from "./Components/Pages/Signup/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  const appStyle = {
    backgroundColor: darkMode ? "#2c2c2c" : "#f5f5f5",
    color: darkMode ? "#f5f5f5" : "#000000",
    minHeight: "100vh",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <div style={appStyle}>
      {/* <h1 className="text-center">Ecommerce Website</h1> */}
      <BrowserRouter>
      <Header darkMode={darkMode} toggleTheme={toggleTheme}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/updateproduct" element={<UpdateProduct/>}/>
          <Route path="/logout" element={<Login/>}/>
          <Route path="/profile" element={<Register/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
          <ToastContainer />
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
