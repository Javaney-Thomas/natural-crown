import React from 'react';
import './Footer3.css';
import { useState } from 'react'
import instagram from '../materials/instagram.svg';
import envelopealtfill from '../materials/envelopealtfill.svg';
import telephonefill from '../materials/telephonefill.svg';

import MapModal from '../Head/Mapmodal';

const Footer3 = () => {
  const [showMap, setShowMap] = useState(false);

  const handleMapClick = () => {
    setShowMap(true);
  };

  const handleClose = () => {
    setShowMap(false);
  };


  return (
    <div id="contact-us" className="footer-container3">
      <div className="container1">
        <h2>Contact Us</h2>
        <div className="connects">
          <div className="contact-item">
            <img src={telephonefill} alt="phone" className="ftr-lefticon" />
            <h4>
              <a href="tel:718-766-8819" style={{ color: 'inherit', textDecoration: 'none' }}>718-766-8819</a>
            </h4>
          </div>
          <div className="contact-item">
            <img src={envelopealtfill} alt="email" className="ftr-lefticon" />
            <h4>
            <a href="mailto:crownednaturally@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>crownednaturally@gmail.com</a>
            </h4>
          </div>
          <div className="contact-item">
            <img src={telephonefill} alt="location" className="ftr-lefticon" onClick={handleMapClick} style={{ cursor: 'pointer' }}/>
            <h4>5321 Clarendon Rd, Brooklyn, NY 11203</h4>
          </div>
        </div>
      </div>
      <div className="container2">
        <h2>Important Links</h2>
        <div className="wordlinks">
          <h4>About Us</h4>
          <h4>All Products</h4>
          <h4>Contact Us</h4>
        </div>
      </div>
      <div className="container3">
        <h2>Connect With Us</h2>
        <div className="endicons">
          <img src={instagram} alt="instagram" className="ftr-lefticon" />
          {/* <img src={link45 } alt="link45" className="ftr-lefticon" />
          <img src={linkedin} alt="linkedin" className="ftr-lefticon" />  */}
        </div>
        <div className="patent">
          <h5>© 2024 by Crowned Naturally, All Rights Reserved</h5>
        </div>
      </div>
      <MapModal show={showMap} handleClose={handleClose} />
    </div>
    
  )
}

export default Footer3;







