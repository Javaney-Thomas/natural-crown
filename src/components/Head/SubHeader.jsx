import React from 'react'
import Midpager from "../materials/Midpager.jpg"
import leavesbck1 from '../materials/leavesbck1.jpeg';
import { Container, Carousel } from 'react-bootstrap';
import './SubHeader.css'
import prd6 from '../materials/prd6.jpeg';
import prd7 from '../materials/prd7.jpeg';
import prd8 from '../materials/prd8.jpeg';



const SubHeader = () => {
  return (
    <div className='backlayr'>
      <img src={leavesbck1} alt="bkgr1" style={{width: '100%', height: 'auto'}} />

      <div className='sections'>
        <div className="grid-container">
          <img src={prd7} alt="prd7" className='grid-item large-item' ></img>
          <img src={prd6} alt="prd6" className='grid-item small-item' ></img>
          <img src={prd8} alt="prd8" className='grid-item small-item' ></img> 
        </div>
        <div className='greetingcard'>
          <h2><span className='crown-fontclr'>Why Crowned Naturally?</span></h2>
          <h3>
            <span className='crown-fontclr2'>Crowned Naturally is a brand created with nature at its core. 
            We created a creme that is moisturizing and safe to use firmly 
            head to toe.It will leave your skin and hair nourished and shiny 
            with its blend of Shea and mango butters along with the 
            essential oils of argan, aloe, castor, and other healing oils provided by nature.
            These ingredients are natural and safe for the whole family from the baby to grandma. 
            The only side affects are smooth shiny and healthy skin.</span>
          </h3>
        </div>
      </div>

    </div>
  )
}

export default SubHeader