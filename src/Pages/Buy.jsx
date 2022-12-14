import React from "react";
import "../Styles/Buy.css";
import { Link } from "react-router-dom";

const Buy = () => {
  return (
    <div className="buy">
      <h1>Buy/Sell Instantly</h1>
      <div className="ind-buss">
        <Link to="/buy" style={{ backgroundColor: "white" }}>
          Buy
        </Link>
        <Link to="/sell">Sell</Link>
      </div>
      <div>
        <label htmlFor="coin to buy">Coin to Buy</label>
        <input placeholder="Bitcoin(BTC)"></input>
        {/* <select name="" id="" style={{width: '100%'}}>
          <option value="">BTC</option>
          <option value="">BNB</option>
          <option value="">ETH</option>
        </select> */}
      </div>
      <div>
        <label htmlFor="currency">Currency</label>

        <input placeholder="Naira(NGN)"></input>
      </div>
      <div className="amount">
        <label htmlFor="amount">Amount</label>
        <div className="inner-amount">
          <input placeholder="NGN"></input>
          <input placeholder="300,000,000"></input>
        </div>
      </div>
      <div className="gs-btn">
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Buy;
