import React from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";

const CartList = (props) => {
  console.log(props.orders);
  return (
    <section className="cart__List">
      <div className="container">
        <h4>Your Cart</h4>
        <hr />
        <div className="list">
          {props.orders.map((order) => (
            <>
              <CartItem order={order} />
              <hr />
            </>
          ))}
        </div>
        <div className="total">
          <div className="info1">
            <div className="item__title">
              <h5>All Items</h5>
            </div>
          </div>
          <div className="info2">
            <div className="item__count">{props.orders.length}</div>
            <div className="item__price">$320</div>
            <Link to="/" className="button is-primary">
              Check out All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartList;
