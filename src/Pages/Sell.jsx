import React from "react";
import "../Styles/sell.css";
import { Link } from "react-router-dom";

const Sell = () => {
  return (
    <div className="sell">
      <h1>Buy/Sell Instantly</h1>
      <div className="ind-buss">
        <Link to="/buy">Buy</Link>
        <Link to="/sell" style={{ backgroundColor: "white" }}>
          Sell
        </Link>
      </div>
      <div>
        <label htmlFor="coin to buy">Coin to Sell</label>
        <input placeholder="Bitcoin(BTC)"></input>
      </div>
      <div>
        <label htmlFor="currency">Currency</label>

        <input placeholder="Naira(NGN)"></input>
      </div>
      <div className="amount">
        <label htmlFor="amount">Amount</label>
        <div className="inner-amount">
          <input placeholder="Amount"></input>
          <input placeholder="300,000,000"></input>
        </div>
      </div>
      <div className="gs-btn">
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Sell;
