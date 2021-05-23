import React, { useState } from "react";

const HeroProduct = ({ item, onClick }) => {
  const [count, setCount] = useState(1);

  return (
    <section className="hero-product">
      <div className="container">
        <div className="product__images">
          <div className="product__images__small">
            <img src={item.image} alt="product" />
            <img src={item.image} alt="product" />
            <img src={item.image} alt="product" />
          </div>
          <div className="product__image">
            <img src={item.image} alt="product" />
          </div>
        </div>
        <div className="product__desc">
          <h1>{item.price}</h1>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <div className="inputs">
            <input
              type="number"
              name="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button
              className="button is-primary"
              onClick={() => onClick(item, count)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProduct;
