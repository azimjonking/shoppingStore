import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";

const Products = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="products container">
      <div className="products-container">
        {!data && <h1>Product topilmadi</h1>}

        {data &&
          data.map((item) => {
            return (
              <div key={item.id} className="product">
                <div className="product-img">
                  <img src={item.url} alt={item.title} />
                </div>
                <p className='product-title'>Name: {item.title}</p>
                <p className='product-price'>Price: {item.price}</p>
                <p className='product-discount'>Discount: {item.discountPersentage}%</p>
                <button>Add to Cart</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
