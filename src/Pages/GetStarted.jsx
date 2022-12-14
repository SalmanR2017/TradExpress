import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Getstarted.css'

const GetStarted = () => {
  return (
    <div className="getstarted">
      <h1>Welcome</h1>
      <div className="ind-buss">
        <Link to='/getstarted' style={{ backgroundColor: 'white'}}>Individual</Link>
        <Link to='/getstarted2'>Bussiness</Link>
        
      </div>
      <div>
        <input placeholder="Username"></input>
      </div>
      <div>
        <input placeholder="Full Name"></input>
      </div>
      <div>
        <input placeholder="Phone Number"></input>
      </div>
      <div>
        <input placeholder="Email"></input>
      </div>
      <div>
        <input placeholder="Referral code (optional)"></input>
      </div>
      <div className="tc-txt">
        <p>
          By clicking the Sign Up button below, you agree to TradExpress
          <Link> terms and service</Link>
        </p>
      </div>
      <div className="gs-btn">
        <button>Sign Up</button>
      </div>
      <div className="tc-txt">
        <p>
          Already have an account? <Link to='/login'>Click here</Link>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
