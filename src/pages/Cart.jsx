import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Subscripe from "../components/Subscripe";
import CartList from "../components/CartList";

const Cart = (props) => {
  return (
    <>
      <Header halfColor={false} />
      <CartList orders={props.orders} />
      <Subscripe />
      <Footer />
    </>
  );
};

export default Cart;
