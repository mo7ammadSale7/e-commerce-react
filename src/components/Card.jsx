import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <div className="item__image">
          <img src={image} alt="item" />
        </div>
        <div className="item__desc">
          <span>{name}</span>
          <span>{price}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
