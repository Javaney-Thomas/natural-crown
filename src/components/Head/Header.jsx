import React, { useState } from 'react';
import './Header.css';
import geoaltfill from '../materials/geoaltfill.svg';
import envelopealtfill from '../materials/envelopealtfill.svg';
import telephonefill from '../materials/telephonefill.svg';
import instagram from '../materials/instagram.svg';
import link45 from '../materials/link45deg.svg';
import linkedin from '../materials/linkedin.svg';
import MapModal from '../Head/Mapmodal';

const Header = () => {
  const [showMap, setShowMap] = useState(false);

  const handleMapClick = () => {
    setShowMap(true);
  };

  const handleClose = () => {
    setShowMap(false);
  };

  return (
    <div className="header">
      <div className="header-section" onClick={handleMapClick} style={{ cursor: 'pointer' }}>
        <img src={geoaltfill} alt="location-icon" className="header-mainicon" />
        <h2 className="header-font">5321 Clarendon Rd, Brooklyn, NY 11203</h2>
      </div>
      <div className="header-section">
        <img src={telephonefill} alt="phone" className="header-mainicon" />
        <h2 className="header-font">
          <a href="tel:718-766-8819" style={{ color: 'inherit', textDecoration: 'none' }}>718-766-8819</a>
        </h2>
      </div>
      <div className="header-section">
        <img src={envelopealtfill} alt="mail-icon" className="header-mainicon" />
        <h2 className="header-font">
          <a href="mailto:crownednaturally@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>crownednaturally@gmail.com</a>
        </h2>
      </div>
      <div className="header-lasticons">
        <a href="https://www.instagram.com/crownednaturally?igsh=c3pyNDZnZmdmZjcw" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="ig-icon" className="header-iconset" />
        </a>
        <img src={link45} alt="link-icon" className="header-iconset" />
        <img src={linkedin} alt="linkedin-icon" className="header-iconset" />
      </div>
      <MapModal show={showMap} handleClose={handleClose} />
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
// import { useState } from 'react';
// import Mapmodal from './Mapmodal';



// const Header = () => {
//   const [showMap, setShowMap] = useState(false);

//   const handleMapClick = () => {
//     setShowMap(!showMap);
//   };

//   const handleClose = () => {
//     setShowMap(false);
//   };

//   return (
//     <div className="header">
//       <div className="header-section" onClick={handleMapClick} style={{cursor: 'pointer'}}>
//         <img src={geoaltfill} alt="location-icon" className="header-mainicon" />
//         <h2 className="header-font">5321 Clarendon Rd, Brooklyn, NY 11203</h2>
//       </div>
//       <div className="header-section">
//         <img src={telephonefill} alt="phone" className="header-mainicon" />
//         <h2 className="header-font">718-766-8819</h2>
//       </div>
//       <div className="header-section">
//         <img src={envelopealtfill} alt="mail-icon" className="header-mainicon" />
//         <h2 className="header-font">crownednaturally@gmail.com</h2>
//       </div>
//       <div className="header-lasticons">
//         <a href="https://www.instagram.com/crownednaturally?igsh=c3pyNDZnZmdmZjcw" target="_blank" rel="noopener noreferrer">
//           <img src={instagram} alt="ig-icon" className="header-iconset" />
//         </a>
//         <a href='https://www.styleseat.com/m/v/MissQ2u'>
//           <img src={link45} alt="link-icon" className="header-iconset" />
//         </a>
//         <img src={linkedin} alt="linkedin-icon" className="header-iconset" />
//       </div>
//       <Mapmodal show={showMap} onClose={handleClose}>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.320113666929!2d-73.92855098799846!3d40.6448734712846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ca3171e5807%3A0x9fe4df3d5641af74!2s5321%20Clarendon%20Rd%2C%20Brooklyn%2C%20NY%2011203%2C%20USA!5e0!3m2!1sen!2sjm!4v1722523148099!5m2!1sen!2sjm"
//           width="600"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </Mapmodal>
//     </div>
//   );
// }

// export default Header;
















