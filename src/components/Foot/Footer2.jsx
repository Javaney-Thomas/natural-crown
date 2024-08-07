import React from 'react';
import './Footer2.css';

const Footer2 = () => {
  return (
    <div className='footer-container2'>
      <div className='kairos-bnr'>
        <h2>Empowered by The Kairos Family</h2>
      </div>
      <div className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="emailfill">
          <form action="#" method="post">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer2;


