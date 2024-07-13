import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Add from "./components/Add";
import Products from "./components/Products";
import Login from "./components/Login";

function App() {
  const location = useLocation();
  const [productsData, setProductsData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => setProductsData(response.data));
  }, [refresh]);

  function addNewData(newProduct) {
    axios
      .post("http://localhost:3000/products", newProduct)
      .then((response) => {
        console.log("Response:", response.data);
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  function deleteData(id) {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }


  function updataData(id, newProduct) {
    axios
      .put(`http://localhost:3000/products/${id}`, newProduct)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  return (
    <div className="App">
      {location.pathname !== "/login" && <Header />}
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/add" element={<Add addNewData={addNewData} updataData={updataData} />} />
        <Route
          path="/products"
          element={
            <Products productsData={productsData} deleteData={deleteData} />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
