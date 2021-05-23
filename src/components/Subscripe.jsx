import React from "react";

import subscripeIMG from "../img/mailing-list-img.png";

const Subscripe = () => {
  return (
    <section className="subscripe">
      <div className="container">
        <div className="sub__image">
          <img src={subscripeIMG} alt="Hero" />
        </div>
        <div className="sub__desc">
          <p>Sign up for our newsletter and get 10% off your next order.</p>
          <input type="email" name="email" className="email" />
        </div>
      </div>
    </section>
  );
};

export default Subscripe;
