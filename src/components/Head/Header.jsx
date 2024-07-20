import React from 'react';
import './Header.css';
import geoaltfill from '../materials/geoaltfill.svg';
import envelopealtfill from '../materials/envelopealtfill.svg';
import telephonefill from '../materials/telephonefill.svg';
import instagram from '../materials/instagram.svg';
import link45 from '../materials/link45deg.svg';
import linkedin from '../materials/linkedin.svg';
import geoalt from '../materials/geoalt.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header-section">
        <img src={geoaltfill} alt="location-icon" className="header-mainicon" />
        <h2 className="header-font">5321 Clarendon Rd, Brooklyn, NY 11203</h2>
      </div>
      <div className="header-section">
        <img src={telephonefill} alt="phone" className="header-mainicon" />
        <h2 className="header-font">718-766-8819</h2>
      </div>
      <div className="header-section">
        <img src={envelopealtfill} alt="mail-icon" className="header-mainicon" />
        <h2 className="header-font">crownednaturally@gmail.com</h2>
      </div>
      <div className="header-lasticons">
        <img src={instagram} alt="ig-icon" className="header-iconset" />
        <img src={link45} alt="link-icon" className="header-iconset" />
        <img src={linkedin} alt="linkedin-icon" className="header-iconset" />
      </div>
    </div>
  );
}

export default Header;




















// import React from 'react';
// import './Header.css';
// import geoaltfill from '../materials/geoaltfill.svg';
// import envelopealtfill from '../materials/envelopealtfill.svg';
// import telephonefill from '../materials/telephonefill.svg';
// import instagram from '../materials/instagram.svg';
// import link45 from '../materials/link45deg.svg';
// import linkedin from '../materials/linkedin.svg';

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="header-section">
//         <img src={geoaltfill} alt="location-icon" className="header-icon" />
//         <h2 className="header-font">5321 Clarendon Rd, Brooklyn, NY 11203</h2>
//       </div>
//       <div className="header-section">
//         <img src={telephonefill} alt="phone" className="header-icon" />
//         <h2 className="header-font">718-766-8819</h2>
//       </div>
//       <div className="header-section">
//         <img src={envelopealtfill} alt="mail-icon" className="header-icon" />
//         <h2 className="header-font">crownednaturally@gmail.com</h2>
//       </div>
//       <div className="header-icons">
//         <img src={instagram} alt="ig-icon" className="header-icon" />
//         <img src={link45} alt="link-icon" className="header-icon" />
//         <img src={linkedin} alt="linkedin-icon" className="header-icon" />
//       </div>
//     </div>
//   );
// }

// export default Header;









// import React from 'react'
// import './Header.css';
// import QueenLogo from "../materials/1 Main Website Information/QueenLogo.png";
// import geoaltfill from '../materials/geoaltfill.svg';
// import envelopealtfill from '../materials/envelopealtfill.svg';
// import telephonefill from '../materials/1 Main Website Information/telephonefill.svg';
// import instagram from '../materials/instagram.svg';
// import link45 from '../materials/link45deg.svg';
// import linkedin from '../materials/linkedin.svg';



// const Header = () => {
//   return (
//     <div className="header">
//       <img
//       src={geoaltfill} alt='location-icon'
//       ></img>
//       <h2 className='header-font'>5321 Clarendon Rd, Brooklyn, NY 11203</h2>
//       <div>
//         <img src={telephonefill} alt="phone" />
//         <h2 className="header-font">718-766-8819</h2>
//       </div>
//       <div>
//         <img src={envelopealtfill} alt="mailicon"/>
//         <h2 className="header-font">crownednaturally@gmail.com</h2>
//       </div>
//       <div className="header-linkcons">
//         <h2>
//           <img src={instagram} alt="ig-icon" />
//           <img src={link45} alt="link-icon" />
//           <img src={linkedin} alt="linkedin-icon" />
//         </h2>
//       </div>
//     </div>
//   )
// }

// export default Header