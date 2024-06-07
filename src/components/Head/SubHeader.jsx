import React from 'react'
import Midpager from "../materials/Midpager.jpg"
import { Container, Carousel } from 'react-bootstrap';

const SubHeader = () => {
  return (
    <div className='image-container'>
      <figure className='figure-container'>
        <img src={Midpager} alt='img' className='img-fluid' style={{ width: '100%', height: 'auto' }} />
        <figcaption className='fig-cap'>
          <h1>Our Products</h1>
          <h3>Be your own kind of beautiful</h3>
        </figcaption>
      </figure>
    </div>
    
  )
}

export default SubHeader