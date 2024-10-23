import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Cards from "./components/Cards";
import MainPage from "./components/MainPage"; 
import Navbar from "./components/Navbar"; 
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cards" element={<Cards />} /> 
      </Routes>
    </BrowserRouter>
  );
}
