import React from "react";

import Card from "./Card";
import { Link } from "react-router-dom";

const Products = ({ items, onClick }) => {
  return (
    <section className="products">
      <div className="container">
        {items.map((item, i) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      <Link to="/" className="button is-secondary">
        More Products
      </Link>
    </section>
  );
};

export default Products;
