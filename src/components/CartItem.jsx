import React from "react";

import { Link } from "react-router-dom";

const CartItem = ({ order }) => {
  return (
    <div className="item">
      <div className="info1">
        <div className="item__image">
          <img src={order.image} alt="item" />
        </div>
        <div className="item__title">
          <h5>{order.name}</h5>
        </div>
      </div>
      <div className="info2">
        <div className="item__count">{order.count}</div>
        <div className="item__price">{order.price}</div>
        <Link to="/cart" className="button is-secondary">
          Check out
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
