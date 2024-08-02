import React from 'react';
import greenleaf2 from '../materials/greenleaf2.png';
import prd6 from '../materials/prd6.png';
import prd7 from '../materials/prd7.png';
import prd8 from '../materials/prd8.png';
import glightback from '../materials/glightback.png';
import './Whysection.css';
import { Link as ScrollLink } from 'react-scroll';




const Whysection = () => {
  return (
    <div id="why-section" className='backlayr'
      style={{
      backgroundImage: `url(${glightback})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh'}}>
      
      <div className='sections'>
        <div className="grid-container">
          <img src={prd7} alt="prd7" className='grid-item large-item' />
          <div className="small-container">
            <img src={prd6} alt="prd6" className='grid-item small-item' />
            <img src={prd8} alt="prd8" className='grid-item small-item' />
          </div>
        </div>
        <div className='greetingcard'>
          <h2 className='crown-fontclr'>Why Crowned Naturally?</h2>
          <h3 className='crown-fontclr2'>
            Crowned Naturally is a brand created with nature at its core. 
            We created a creme that is moisturizing and safe to use firmly 
            head to toe. It will leave your skin and hair nourished and shiny 
            with its blend of Shea and mango butters along with the essential 
            oils of argan, aloe, castor, and other healing oils provided by 
            nature. These ingredients are natural and safe for the whole family 
            from the baby to grandma. The only side effects are smooth shiny 
            and healthy skin.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Whysection;

