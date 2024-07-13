import React from "react";
import "./Product.css";

const Products = ({productsData, deleteData}) => {

  return (
    <div className="products container">
      <div className="products-container">
        {!productsData && <h1>Product topilmadi</h1>}

        {productsData &&
          productsData.map((item) => {
            return (
              <div key={item.id} className="product">
                <div className="product-img">
                  <img src={item.url} alt={item.title} />
                </div>
                <p className='product-title'>Title: {item.title}</p>
                <p className='product-price'>Price: {item.price}</p>
                <p className='product-discount'>Discount: {item.discountPersentage}%</p>
                <button>Edit</button>
                <button onClick={() => deleteData(item.id)}>Delete</button>
                <button>Add To Cart</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
