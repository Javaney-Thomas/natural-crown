import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './CarouselImages.css';
import prd1 from '../materials/prd1.jpeg';
import prd2 from '../materials/prd2.jpeg';
import prd3 from '../materials/prd3.jpg';


const CarouselImages = () => {
  return (
    <Carousel>
    <Carousel.Item interval={5000}>
      <img src={prd1} alt='prd1' text="First slide" style={{ width: '100%', height: 'auto', background: 'yellow' }}/>
      <Carousel.Caption>
        <h3><span className='colorway'>#1</span> for Brooklyn's Beauties</h3>
        <p>All your needs in <span className='colorway'>ONE PLACE</span>.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={4000}>
      <img src={prd2} alt='prd2' text="Second slide"  style={{ width: '100%', height: 'auto' }}/>
      <Carousel.Caption>
        <h3>All Natural Products</h3>
        <p>Made to strengthen hair and lock in moisture.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img src={prd3} alt='prd3' text="Third slide"  style={{ width: '100%', height: 'auto' }} />
      <Carousel.Caption>
        <h3>Special Considerations</h3>
        <p>
          For all hair types and styles.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default CarouselImages