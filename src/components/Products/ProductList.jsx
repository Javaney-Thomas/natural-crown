import React from 'react';
import './ProductList.css';
import greenleaf from '../materials/greenleaf.png';
import summerrain2 from '../materials/summerrain2.jpeg';
import summerrain from '../materials/summerrain.png'
import unleashed2 from '../materials/unleashed2.jpeg';
import goldenunleash from'../materials/goldenunleash.png';
import rosepetal3 from '../materials/rosepetal3.jpeg';
import rosepetal from '../materials/rosepetal.png'
import lavender2 from '../materials/lavender2.jpeg';
import lavender from '../materials/lavender.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sheabuttermelon2 from "../materials/sheabuttermellon2.jpeg";
import sheaberrymelon from "../materials/sheaberrymelon.png";
import { useStateValue } from '../../StateProvider';


const ProductList = () => {
  const [{ cart }, dispatch] = useStateValue();
  console.log("Cart:", cart);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const addToCart = (id, title, image, price) => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div id='product-list' className='product' style={{ backgroundImage: `url(${greenleaf})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh' }}>
      <h2>SHOP OUR LATEST <span id='brand_color'>PRODUCTS</span></h2>

      <div className="product-carousel">
        <Carousel responsive={responsive}>
          <div className='card1'>
            <div className="image-container">
              <img className='pic1' src={summerrain2} alt="summerrain" />
              <img className='pic2' src={summerrain} alt="summerrainStandIn" />
            </div>
            <h2 style={{ color: 'black' }}>Summer Rain</h2>
            <p className="price">$24.99</p>
            <button onClick={() => addToCart(1, 'Summer Rain', summerrain2, 24.99)}>Add To Cart</button>
            <p style={{ color: 'black' }}>Experience the refreshing essence of a summer rain shower with our Summer Rain Shea Butter Cream. Let the calming aroma of rain-kissed petals and fresh greens transport you to a serene oasis, while our nourishing shea butter formula hydrates and revitalizes your skin, leaving it soft, smooth, and beautifully scented.</p>
          </div>

          <div className='card1'>
            <div className="image-container">
              <img className='pic1' src={sheabuttermelon2} alt="sheabutter" />
              <img className='pic2' src={sheaberrymelon} alt="sheaberryStandIn" />
            </div>
            <h2 style={{ color: 'black' }}>Shea Berry Melon</h2>
            <p className="price">$24.99</p>
            <button onClick={() => addToCart(2, 'Shea Berry Melon', sheabuttermelon2, 24.99)}>Add To Cart</button>
            <p style={{ color: 'black' }}>Indulge your senses in a burst of juicy sweetness 
            with our Shea Berry Melon Shea Butter Cream. Enriched with the goodness of shea
             butter and infused with the refreshing essence of ripe berries and succulent melon, this delightful scent will leave your skin feeling nourished and invigorated all day long.</p>
          </div>

          <div className='card1'>
            <div className="image-container">
              <img className='pic1' src={unleashed2} alt="unleashed" />
              <img className='pic2' src={goldenunleash} alt="goldenunleashStandIn" />
            </div>
            <h2 style={{ color: 'black' }}>Unleashed</h2>
            <p className="price">$24.99</p>
            <button onClick={() => addToCart(3, 'Unleashed', unleashed2, 24.99)}>Add To Cart</button>
            <p style={{ color: 'black' }}>Unleash your inner confidence with our Unleashed Shea Butter Cream. This empowering scent combines the richness of shea butter with a hint of exotic spices and musk, creating a bold and captivating fragrance that commands attention. Elevate your skincare routine and embrace your natural beauty with every application.</p>
          </div>

          <div className='card1'>
            <div className="image-container">
              <img className='pic1' src={rosepetal3} alt="rosepetal" />
              <img className='pic2' src={rosepetal} alt="rosepetalStandIn" />
            </div>
            <h2 style={{ color: 'black' }}>Rose Petal</h2>
            <p className="price">$24.99</p>
            <button onClick={() => addToCart(4, 'Rose Petal', rosepetal3, 24.99)}>Add To Cart</button>
            <p style={{ color: 'black' }}>Immerse yourself in the timeless elegance of our Rose Petal Shea Butter Cream. Infused with the delicate fragrance of freshly picked roses, this luxurious cream melts into your skin, delivering deep hydration and a subtle floral aroma that lingers throughout the day. Pamper yourself with a touch of romance and indulgence.</p>
          </div>

          <div className='card1'>
            <div className="image-container">
              <img className='pic1' src={lavender2} alt="lavender" />
              <img className='pic2' src={lavender} alt="lavendarStandIn" />
            </div>
            <h2 style={{ color: 'black' }}>Lavender Bliss</h2>
            <p className="price">$24.99</p>
            <button onClick={() => addToCart(5, 'Lavender Bliss', lavender2, 24.99)}>Add To Cart</button>
            <p style={{ color: 'black' }}>Immerse yourself in the timeless elegance of our Rose Petal Shea Butter Cream. Infused with the delicate fragrance of freshly picked roses, this luxurious cream melts into your skin, delivering deep hydration and a subtle floral aroma that lingers throughout the day. Pamper yourself with a touch of romance and indulgence.</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ProductList;








