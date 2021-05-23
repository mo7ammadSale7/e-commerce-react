import React from "react";

import hero from "../img/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="half-color" />
      <div className="container">
        <div className="hero__image">
          <img src={hero} alt="Hero" />
        </div>
        <div className="hero__desc">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            ultrices magna mauris pellentesque dignissim ante varius diam elit.{" "}
          </p>
          <Link to="/" className="button is-primary">
            our products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
