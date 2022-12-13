import React from "react";
import appstore from "../images/sec5-apple.png";
import goggleplay from "../images/sec5-google.png";
import "../Styles/section5.css";
import { Link } from "react-router-dom";

const Section5 = () => {
  return (
    <section className="section5">
      <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
      <h1>Create your account for free and start trading today!</h1>
      <div className="btns-container">
        <button>Get started</button>
        <div className="btn-imgs">
          <img src={appstore} alt="" />
          <img src={goggleplay} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section5;
