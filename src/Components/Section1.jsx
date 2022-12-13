import React from "react";
import { Link } from "react-router-dom";
import appleStore from "../images/appstore.png";
import googleStore from "../images/goggleplay.png";
import "../Styles/Section1.css";
import rings from "../images/Group 127.png";

const Section1 = () => {
  return (
    <div className="section1">
      <div>
        <h1>Buy, sell and manage your Crypto on TradExpress.</h1>
        <p>
          Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.
        </p>
        <Link className="gs">Get Started</Link>
        <div>
          <img src={googleStore} alt="" />
          <img src={appleStore} alt="" />
        </div>
      </div>

      <img src={rings} alt="" />
    </div>
  );
};

export default Section1;
