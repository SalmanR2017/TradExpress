import React from "react";
import { useState } from "react";
import sec3a from "../images/sec3a.png";
import sec3b from "../images/sec3b.png";
import sec3c from "../images/sec3c.png";
import "../Styles/Section3.css";
import { useRef } from "react";

const Section3 = () => {
  let divRef = useRef();
  let btnRef = useRef()
  console.log(btnRef.current);
  const [btn, setBtn] = useState('See Less')
  
  let btnHandler = () =>{
  if (btn == 'See Less' ) {
    divRef.current.style.display = 'none';
    setBtn('See More')
  } else{
    divRef.current.style.display = 'flex';
    setBtn('See Less')
  };

  }
  return (
    <section className="section3">
      <h1>Why do people get involved with Cryptocurrencies?</h1>
      <button ref={btnRef} onClick={btnHandler}>{btn}</button>
      {/* start */}
      <div className="sec3-container" ref={divRef}>
        <div className="sub-cont1">
          <img src={sec3a} alt="" />
          <h4>Easy Mode of Payment</h4>
          <p>
            People can now easily send and receive money from anywhere in the
            world to purchase goods and pay for services.
          </p>
        </div>
        <div className="sub-cont2">
          <img src={sec3b} alt="" />
          <h4>Financial Freedom</h4>
          <p>
            Just like the internet no single entity controls the Crypto network
            which provides users transparency and privacy, which puts you in
            absolute control of your money.
          </p>
        </div>
        <div className="sub-cont3">
          <img src={sec3c} alt="" />
          <h4>Investment</h4>
          <p>
            The constant demand as made Cryptocurrecies a Digital Gold used for
            alternative store of wealth on long term investments.
          </p>
        </div>
      </div>
      {/* end */}
    </section>
  );
};

export default Section3;
