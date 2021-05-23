import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import data from "./data/store-items.json";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const App = (props) => {
  const [order, setOrder] = useState({});
  const [orders, setOrders] = useState([]);

  const handleAddToCart = (item, count) => {
    setOrder({ ...item, count });
  };

  useEffect(() => {
    setOrders([...orders, order]);
  }, [order]);

  return (
    <>
      <Route
        exact
        path="/product/:id"
        render={(props) => {
          return (
            <ProductDetail {...props} items={data} onClick={handleAddToCart} />
          );
        }}
      />
      <Route
        exact
        path="/cart"
        render={(props) => {
          return <Cart {...props} orders={orders} />;
        }}
      />
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home {...props} items={data} />;
        }}
      />
    </>
  );
};

export default App;
