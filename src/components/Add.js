import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import "./Add.css";

const Add = ({addNewData}) => {

  const title = useRef()
  const url = useRef()
  const category = useRef()
  const price = useRef()
  const discount = useRef()
  const form = useRef()
  const navigate = useNavigate();

  const clearInputs = () => {
    form.current.reset()
  }

  const handleSubmitClick = (e) => {
    e.preventDefault()
    const product = {
      title: title.current.value,
      url: url.current.value,
      category: category.current.value,
      price: price.current.value,
      discount: discount.current.value,
      id: uuidv4(),
    }
    addNewData(product)
    clearInputs()
    navigate("/products");
  }

  return (
    <div className="addProduct container">
      <form ref={form} onSubmit={handleSubmitClick}>
        <div className="form-group">
          <label htmlFor="name">Title:</label>
          <input type="text" id="name" ref={title} />
        </div>
        <div className="form-group">
          <label htmlFor="url">Image URL:</label>
          <input type="text" id="url" ref={url} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category" ref={category} >
            <option value="phone">Phone</option>
            <option value="laptop">laptop</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" ref={price} />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount:</label>
          <input type="number" id="discount" ref={discount} />
        </div>

        <button className="add-btn">Add</button>
        <button type="reset" className="clear-btn">
          Clear
        </button>
      </form>
    </div>
  );
};

export default Add;
