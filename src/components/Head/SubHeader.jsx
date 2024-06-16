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

      </div>
    </div>
  )
}

export default SubHeader