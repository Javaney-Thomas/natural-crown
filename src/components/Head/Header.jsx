import React, { useState } from 'react';
import './Header.css';
import geoaltfill from '../materials/geoaltfill.svg';
import envelopealtfill from '../materials/envelopealtfill.svg';
import telephonefill from '../materials/telephonefill.svg';
import instagram from '../materials/instagram.svg';
import MapModal from '../Head/Mapmodal';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import fb from '../materials/fb.svg';



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

        <a href="https://www.facebook.com/crownednaturally" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="fb_svg" className="header-iconset"
          style={{
            height: "35px",
            width: "35px",
            padding: "3px",
            margin: "10px"}} />
        </a>

        <div>
        <button className="style_btn" onClick={() => window.open("https://www.styleseat.com/m/v/MissQ2u", "_blank")}>
          StyleSeat
        </button>
        </div>
        
        
      </div>
      <MapModal show={showMap} handleClose={handleClose} />
    </div>
  );
}

export default Header;



















