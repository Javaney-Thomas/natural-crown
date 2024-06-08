import React from 'react'
import Midpager from "../materials/Midpager.jpg"
import leavesbck2 from '../materials/leavesbck2.jpeg';
import { Container, Carousel } from 'react-bootstrap';
import './SubHeader.css'

const SubHeader = () => {
  return (
    <div className='image-container'>
      <figure className='figure-container'>
        <img src={leavesbck2} alt='img' className='img-fluid' style={{ width: '100%', height: 'auto' }} />
        <figcaption className='fig-cap'>
          <h1>Our Products</h1>
          <h3>Be your own kind of beautiful</h3>
        </figcaption>
      </figure>
    </div>
    
  )
}

export default SubHeader