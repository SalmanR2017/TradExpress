import React from "react";
import "../Styles/Section2.css";

const Section2 = ({ newData2 }) => {
  return (
    <div className="sec2">
      {newData2.map((each) => {
        return (
          <div key={each.id} className="portion">
            <div className="inner-por">
              <p>{each.symbol}/NGN</p>
              <p>{each.percent_change_24h}
              
              </p>
            </div>
            <p>{each.price_usd}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Section2;
