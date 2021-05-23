import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../img/logo.svg";
import cart from "../img/cart.svg";

const Header = (props) => {
  return (
    <header>
      {props.halfColor ? <div className="half-color" /> : null}
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="L&B Logo" />
        </Link>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <a href="#">Collection</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <NavLink exact to="/cart" className="cart">
            <img src={cart} alt="cart" />
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
