import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Subscripe from "../components/Subscripe";
import Products from "./../components/Products";

const Home = ({ items, onClick }) => {
  return (
    <>
      <Header halfColor={true} />
      <Hero />
      <Products items={items} />
      <Subscripe />
      <Footer />
    </>
  );
};

export default Home;
