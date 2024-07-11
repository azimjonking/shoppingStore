import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Add from "./components/Add";
import Products from "./components/Products";
import Login from "./components/Login";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/login" && <Header />}
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/add" element={<Add />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
