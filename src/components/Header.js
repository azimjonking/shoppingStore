import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className='logo'>shopping</Link>

      <ul>
        <li>
          <NavLink to="/add">Add</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>

      <Link to="/login" className='login'>Login</Link>
    </header>
  );
};

export default Header;
