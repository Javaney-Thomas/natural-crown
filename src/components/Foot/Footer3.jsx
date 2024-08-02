import React from 'react';
import './Footer3.css';
import instagram from '../materials/instagram.svg';
import link45 from '../materials/link45deg.svg';
import linkedin from '../materials/linkedin.svg';
import envelopealtfill from '../materials/envelopealtfill.svg';
import telephonefill from '../materials/telephonefill.svg';

const Footer3 = () => {
  return (
    <div id="contact-us" className="footer-container3">
      <div className="container1">
        <h2>Contact Us</h2>
        <div className="connects">
          <div className="contact-item">
            <img src={telephonefill} alt="phone" className="ftr-lefticon" />
            <h4>718-766-8819</h4>
          </div>
          <div className="contact-item">
            <img src={envelopealtfill} alt="email" className="ftr-lefticon" />
            <h4>crownednaturally@gmail.com</h4>
          </div>
          <div className="contact-item">
            <img src={telephonefill} alt="location" className="ftr-lefticon" />
            <h4>5321 Clarendon Rd, Brooklyn, NY 11203</h4>
          </div>
        </div>
      </div>
      <div className="container2">
        <h2>Important Links</h2>
        <div className="wordlinks">
          <h4>Home</h4>
          <h4>About Us</h4>
          <h4>All Products</h4>
          <h4>Contact Us</h4>
        </div>
      </div>
      <div className="container3">
        <h2>Connect With Us</h2>
        <div className="endicons">
          <img src={instagram} alt="instagram" className="ftr-lefticon" />
          <img src={link45} alt="link45" className="ftr-lefticon" />
          <img src={linkedin} alt="linkedin" className="ftr-lefticon" />
        </div>
        <div className="patent">
          <h5>© 2024 by Crowned Naturally, All Rights Reserved</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer3;







// import React from 'react';
// import './Footer3.css';
// import instagram from '../materials/instagram.svg';
// import link45 from '../materials/link45deg.svg';
// import linkedin from '../materials/linkedin.svg';
// import envelopealtfill from '../materials/envelopealtfill.svg';
// import telephonefill from '../materials/telephonefill.svg';

// const Footer3 = () => {
//   return (
//     <div className="footer-container3">
//       <div className="container1">
//         <h2>Contact Us</h2>
//         <div className="connects">
//           <div className="contact-item">
//             <img src={telephonefill} alt="phone" className="ftr-lefticon" />
//             <h4>718-766-8819</h4>
//           </div>
//           <div className="contact-item">
//             <img src={envelopealtfill} alt="email" className="ftr-lefticon" />
//             <h4>crownednaturally@gmail.com</h4>
//           </div>
//           <div className="contact-item">
//             <img src={telephonefill} alt="location" className="ftr-lefticon" />
//             <h4>5321 Clarendon Rd, Brooklyn, NY 11203</h4>
//           </div>
//         </div>
//       </div>
//       <div className="container2">
//         <h2>IMPORTANT LINKS</h2>
//         <div className="wordlinks">
//           <h4>Home</h4>
//           <h4>About Us</h4>
//           <h4>All Products</h4>
//           <h4>Contact Us</h4>
//         </div>
//       </div>
//       <div className="container3">
//         <h2>CONNECT WITH US</h2>
//         <div className="endicons">
//           <img src={instagram} alt="instagram" className="ftr-lefticon" />
//           <img src={link45} alt="link45" className="ftr-lefticon" />
//           <img src={linkedin} alt="linkedin" className="ftr-lefticon" />
//         </div>
//         <div className="patent">
//           <h5>© 2024 by Crowned Naturally, All Rights Reserved</h5>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer3;
