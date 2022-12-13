import React from 'react'
import background from '../images/sec6-imgback.png'
import quote from '../images/sec6-quotemark.png'
import ireti from '../images/ireti.png'
import bayo from '../images/bayo (2).png'
import goke from '../images/goke.png'

const Section6 = () => {
  return (
    <section className="section6">
      <h1>Customer’s Review</h1>
      <div className="review-container">
        <div className="review1">
          <img src={background} alt="" />
          <div className="rev1-txt">
            <img src={quote} alt="" />
            <p>
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
          </div>
          <div className="rev1-img">
            <img src={ireti} alt="" />
            <h3>
              Ireti<span>Nigeria</span>
            </h3>
          </div>
        </div>
        {/* review1 ends */}
        <div className="review2">
          <img src={background} alt="" />
          <div className="rev2-txt">
            <img src={quote} alt="" />
            <p>
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
          </div>
          <div className="rev2-img">
            <img src={bayo} alt="" />
            <h3>
              Bayo<span>USA</span>
            </h3>
          </div>
        </div>
        {/* review2 ends */}
        <div className="review3">
          <img src={background} alt="" />
          <div className="rev3-txt">
            <img src={quote} alt="" />
            <p>
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
          </div>
          <div className="rev3-img">
            <img src={goke} alt="" />
            <h3>
              Olagoke<span>Nigeria</span>
            </h3>
          </div>
        </div>
        {/* review3 ends */}
      </div>
    </section>
  );
}

export default Section6