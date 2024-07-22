import React from 'react';
import './Footer3.css';
import instagram from '../materials/instagram.svg';
import link45 from '../materials/link45deg.svg';
import linkedin from '../materials/linkedin.svg';
import envelopealtfill from '../materials/envelopealtfill.svg';
import telephonefill from '../materials/telephonefill.svg';
//phone icon
//mail icon
//location icon
///far right under contact us
//ig icon maybe use svg
//link svg
//linkedin svg

const Footer3 = () => {
  return (
    <div className="footer-container3">
        <div className="contact1">
            <h2>Contact Us</h2>
            <div className="connects">
                <img src={telephonefill} alt="phone" className="ftr-lefticon" />
                <h4>718-766-8819</h4>
                <img src={telephonefill} alt="phone" className="ftr-lefticon" />
                <h4>crownednaturally@gmail.com</h4>
                <img src={telephonefill} alt="phone" className="ftr-lefticon" />
                <h4>5321 Clarendon Rd, Brooklyn, NY 11203</h4>
            </div>
        </div>
        <div className="container2">
            
            <h2>IMPORTANT LINKS</h2>
            <div className="wordlinks">
                <h4>Home</h4>
                <h4>About Us</h4>
                <h4>All Products</h4>
                <h4>Contact Us</h4>
            </div>
        </div>
        <div className="container3">
            <h2>CONNECT WITH US</h2>
            {/* Set this below to row */}
            <div className="endicons"> 
                <h4>Home</h4>
                <h4>About Us</h4>
                <h4>All Products</h4>
                <h4>Contact Us</h4>
            </div>
            <div className="patent">
                <h5>© 2024 by Crowned Naturally, All Rights Reserved</h5>
            </div>
        </div>
        
    </div>
  )
}

export default Footer3