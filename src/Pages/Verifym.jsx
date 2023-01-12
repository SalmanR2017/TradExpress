import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/verifym.css'
import envilope from '../images/evilope.png'

const verifym = () => {
  return (
    <div className="verifym">
      <h2>You're Almost In!</h2>
      <h2>Welcome Iretiayo</h2>
      <div>
        <img src={envilope} alt="" />
      </div>
      <div className='vpara'>
        <p>
          An activation link has been sent to Ireti4tech@gmail.com Please click
          on the link to verify your email and activate your TradExpress
          account.
        </p>
      </div>
      <div className='verifybtn'>
        <Link to='/login'>Sign Up</Link>
      </div>
    </div>
  );
}

export default verifym