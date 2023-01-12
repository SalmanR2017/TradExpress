import React from "react";
import background from "../images/sec6-imgback.png";
import quote from "../images/sec6-quotemark.png";
import ireti from "../images/ireti.png";
import bayo from "../images/bayo (2).png";
import goke from "../images/goke.png";
import "../Styles/section6.css";

const Section6 = () => {
  return (
    <section className="section6">
      <h1>Customer's Review</h1>
      <div className="review-container">
        <div className="three">
          <div className="top-section">
            <img src={background} alt="" />
            <img src={quote} alt="" />
            <p>
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
          </div>
          <div className="bottom-section">
            <img src={ireti} alt="" />
            <div>
              <h3>Ireti</h3>
              <p>Nigeria</p>
            </div>
          </div>
        </div>
        {/* review1 ends */}
        <div className="three">
          <div className="top-section">
            <img src={background} alt="" />
            <img src={quote} alt="" />
            <p>
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
          </div>
          <div className="bottom-section">
            <img src={bayo} alt="" />
            <div>
              <h3>Bayo</h3>
              <p>USA</p>
            </div>
          </div>
        </div>
        {/* review2 ends */}
        <div className="three">
          <div className="top-section">
            <img src={background} alt="" />
            <img src={quote} alt="" />
            <p>
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
          </div>
          <div className="bottom-section">
            <img src={goke} alt="" />
            <div>
              <h3>Olagoke</h3>
              <p>Nigeria</p>
            </div>
          </div>
        </div>
        {/* review3 ends */}
      </div>
    </section>
  );
};

export default Section6;
