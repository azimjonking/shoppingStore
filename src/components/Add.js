import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import "./Add.css";

const Add = ({ newData }) => {
  return (
    <div className="addProduct container">
      <form>
        <div className="form-group">
          <label htmlFor="name">Title:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="url">Image URL:</label>
          <input type="text" id="url" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category">
            <option value="phone">Phone</option>
            <option value="laptop">laptop</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount:</label>
          <input type="number" id="discount" />
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
