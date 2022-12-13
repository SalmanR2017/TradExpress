import React from 'react'
import twitter from '../images/twitter.png'
import telegram from '../images/telegram.png'
import whatsapp from '../images/whatsapp.png'
import facebook from '../images/facebook.png'
import copyright from '../images/copyright.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="product">
          <h4>Product</h4>
          <p>Bitcoin</p>
          <p>Alt</p>
          <p>Fiat</p>
          <p>Refill</p>
          <p>P2P</p>
        </div>
        <div className="learn">
          <h4>Learn</h4>
          <p>Blog</p>
          <p>Help Center</p>
        </div>
        <div className="contact">
          <h4>Contact</h4>
          <p>hello@tradexpress.com</p>
          <p>support@tradexpress.com</p>
          <div className="sm-icons">
            <img src={twitter} alt="" />
            <img src={telegram} alt="" />
            <img src={whatsapp} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
        <div className="company">
          <h4>Company</h4>
          <p>About us</p>
          <p>Careers</p>
          <p>Rates</p>
          <p>Mobile</p>
        </div>
        <div className="legal">
          <h4>Legal</h4>
          <p>Privacy Policy</p>
          <p>Anti-Money Laundering</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
      <p>
        <span>
          <img src={copyright} alt="" />
        </span>
        2021 Tradexpress Technologies. All Right Reserved (Duplicated by Taiwo)</p>
    </footer>
  );
}

export default Footer