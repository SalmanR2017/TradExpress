import React from "react";
import num1 from "../images/num1.png";
import num2 from "../images/num2.png";
import num3 from "../images/num3.png";
import img4a from "../images/sec4a.png";
import img4b from "../images/sec4b.png";
import img4c from "../images/sec4c.png";
import "../Styles/section4.css";

const Section4 = () => {
  return (
    <section className="section4">
      <h1>Buy and Sell your Cryptocurrency in 3 simple steps</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus
        faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus mauris
        ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla aliquam
        consectetur lectus. Rutrum feugiat et, tellus mattis donec et odio
        molestie amet.
      </p>

      <div className="all">
        <div className="items">
          <div>
            <img className="first-num" src={num1} alt="" />
            <div>
              <h2>create free account</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                voluptas, quae iure eaque tempora reiciendis dolore quasi
                recusandae odio ipsum, harum, quaerat soluta! Atque deserunt
                blanditiis aliquam quia ipsum incidunt?
              </p>
            </div>
          </div>

          <img src={img4a} alt="" />
        </div>
        <div className="items">
          <img src={img4b} alt="" />
          <div>
            <img className="second-num" src={num2} alt="" />
            <div>
              <h2>create free account</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                voluptas, quae iure eaque tempora reiciendis dolore quasi
                recusandae odio ipsum, harum, quaerat soluta! Atque deserunt
                blanditiis aliquam quia ipsum incidunt?
              </p>
            </div>
          </div>
        </div>
        <div className="items">
          <div>
            <img className="third-num" src={num3} alt="" />
            <div>
              <h2>create free account</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                voluptas, quae iure eaque tempora reiciendis dolore quasi
                recusandae odio ipsum, harum, quaerat soluta! Atque deserunt
                blanditiis aliquam quia ipsum incidunt?
              </p>
            </div>
          </div>
          <img src={img4c} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section4;
