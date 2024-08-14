import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckProduct from './CheckProduct';
import { useStateValue } from '../../StateProvider';
import Carousel from 'react-bootstrap/Carousel';

import nappy from '../materials/nappy.png';
import nappy2 from '../materials/nappy2.png';
import nappy3 from '../materials/nappy3.png';
import nappy4 from '../materials/nappy4.png';

const Checkout = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <Carousel className="checkout_carousel" controls={false} indicators={false} fade>
        <Carousel.Item interval={4000}>
          <div
            className="carousel-image"
            style={{
              backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
            }}
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div
            className="carousel-image"
            style={{
              backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
            }}
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div
            className="carousel-image"
            style={{
              backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
            }}
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div
            className="carousel-image"
            style={{
              backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
            }}
          />
        </Carousel.Item>
      </Carousel>

      <div className="checkout_content">
        <div className="subtotal-center">
          <Subtotal />
        </div>

        <div className="checkout_products_container">
          <h2 className="checkout_title">Your Shopping Cart</h2>
          <div className="checkout_products_wrapper">
            <button className="scroll-arrow left-arrow" onClick={() => scroll(-1)}>‹</button>
            <div className="checkout_products">
              {Array.isArray(cart) && cart.length > 0 ? (
                cart.map(item => (
                  <CheckProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                  />
                ))
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
            <button className="scroll-arrow right-arrow" onClick={() => scroll(1)}>›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const scroll = (direction) => {
  const container = document.querySelector('.checkout_products');
  const scrollAmount = container.offsetWidth / 2;
  container.scrollLeft += direction * scrollAmount;
};

export default Checkout;



// import React from 'react';
// import './Checkout.css';
// import Subtotal from './Subtotal';
// import CheckProduct from './CheckProduct';
// import { useStateValue } from '../../StateProvider';
// import Carousel from 'react-bootstrap/Carousel';

// // Ensure the image imports are correct
// import nappy from '../materials/nappy.png';
// import nappy2 from '../materials/nappy2.png';
// import nappy3 from '../materials/nappy3.png';
// import nappy4 from '../materials/nappy4.png';
// import skincare from '../materials/skincare.png';

// const Checkout = () => {
//   const [{ cart }, dispatch] = useStateValue();

//   return (
//     <div className="checkout">
//       <Carousel className="checkout_carousel" controls={false} indicators={false} fade>
//         <Carousel.Item interval={4000}>
//           <div
//             className="carousel-image"
//             style={{
//               backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               height: '100vh',
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item interval={4000}>
//           <div
//             className="carousel-image"
//             style={{
//               backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy2})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               height: '100vh',
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item interval={4000}>
//           <div
//             className="carousel-image"
//             style={{
//               backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy3})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               height: '100vh',
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item interval={4000}>
//           <div
//             className="carousel-image"
//             style={{
//               backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy4})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               height: '100vh',
//             }}
//           />
//         </Carousel.Item>
//       </Carousel>

//       <div className="checkout_content">
//           <div className="subtotal-center">
//             <Subtotal />
//           </div>

//         <div className="checkout_products_container">
//           <h2 className="checkout_title">Your Shopping Cart</h2>
//           <div className="checkout_products">
//             {Array.isArray(cart) && cart.length > 0 ? (
//               cart.map(item => (
//                 <CheckProduct
//                   key={item.id}
//                   id={item.id}
//                   title={item.title}
//                   image={item.image}
//                   price={item.price}
//                 />
//               ))
//             ) : (
//               <p>Your cart is empty</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;




// import React from 'react';
// import './Checkout.css';
// import Subtotal from './Subtotal';
// import CheckProduct from './CheckProduct';
// import { useStateValue } from '../../StateProvider';
// import Carousel from 'react-bootstrap/Carousel';

// import nappy from '../materials/nappy.png';
// import nappy2 from '../materials/nappy2.png';
// import nappy3 from '../materials/nappy3.png';
// import nappy4 from '../materials/nappy4.png';
// import skincare from '../materials/skincare.png';

// const Checkout = () => {
//   const [{ cart }, dispatch] = useStateValue();

//   return (
//     <div className="checkout">
//       <div className="checkout_content">
//         <div className="checkout_left">
//           <img
//             className="checkout_ad"
//             src={skincare}
//             alt="skincare-photo-ad"
//           />

//           <div>
//             <h2 className="checkout_title">Your Shopping Cart</h2>
//             <div className="checkout_products">
//               {Array.isArray(cart) && cart.length > 0 ? (
//                 cart.map(item => (
//                   <CheckProduct
//                     key={item.id}
//                     id={item.id}
//                     title={item.title}
//                     image={item.image}
//                     price={item.price}
//                   />
//                 ))
//               ) : (
//                 <p>Your cart is empty</p>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="checkout_right">
//           <Subtotal />
//         </div>
//       </div>
//       <Carousel className="checkout_carousel" controls={false} indicators={false} fade>
//         <Carousel.Item interval={4000}>
//           <div
//             className="carousel-image"
//             style={{
//               width: '100%', height: 'auto', 
//               backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy})`
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item interval={4000}>
//           <div
//             className="carousel-image"
//             style={{
//               backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy2})`
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item interval={4000}>
//           <div
//             className="carousel-image"
//             style={{
//               backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy3})`
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item interval={4000}>
//           <div
//             className="carousel-image"
//             style={{
//               backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy4})`
//             }}
//           />
//         </Carousel.Item>
//       </Carousel>

      
//     </div>
//   );
// };

// export default Checkout;





// import React from 'react';
// import './Checkout.css';
// import Subtotal from './Subtotal';
// import CheckProduct from './CheckProduct';
// import { useStateValue } from '../../StateProvider';
// import Carousel from 'react-bootstrap/Carousel';

// import nappy from '../materials/nappy.png';
// import nappy2 from '../materials/nappy2.png';
// import nappy3 from '../materials/nappy3.png';
// import nappy4 from '../materials/nappy4.png';
// import skincare from '../materials/skincare.png';

// const Checkout = () => {
//   const [{ cart }, dispatch] = useStateValue();

//   return (
//     <div className="checkout">
//       <Carousel className="checkout_carousel" controls={false} indicators={false} fade>
//         <Carousel.Item interval={4000}>
//           <div
//             className="carousel-image"
//             style={{
//               backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy})`
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item interval={4000}>
//           <div
//             className="carousel-image"
//             style={{
//               backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy2})`
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item interval={4000}>
//           <div
//             className="carousel-image"
//             style={{
//               backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy3})`
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item interval={4000}>
//           <div
//             className="carousel-image"
//             style={{
//               backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url(${nappy4})`
//             }}
//           />
//         </Carousel.Item>
//       </Carousel>

//       <div className="checkout_left">
//         <nappy
//           className="checkout_ad"
//           src={skincare}
//           alt="skincare-photo-ad"
//         />

//         <div>
//           <h2 className="checkout_title">Your Shopping Cart</h2>
//           <div className="checkout_products">
//             {Array.isArray(cart) && cart.length > 0 ? (
//               cart.map(item => (
//                 <CheckProduct
//                   key={item.id}
//                   id={item.id}
//                   title={item.title}
//                   image={item.image}
//                   price={item.price}
//                 />
//               ))
//             ) : (
//               <p>Your cart is empty</p>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="checkout_right">
//         <Subtotal />
//       </div>
//     </div>
//   );
// };

// export default Checkout;






// import React from 'react';
// import "./Checkout.css";
// import Subtotal from './Subtotal';
// import CheckProduct from './CheckProduct';
// import { useStateValue } from '../../StateProvider';
// import Carousel from 'react-bootstrap/Carousel';
// import nappy from '../materials/nappy.png'
// const Checkout = () => {
//   const [{ cart }, dispatch] = useStateValue();

//   return (
//     <div className="checkout">
//       <Carousel controls={false} indicators={false} fade={true} interval={4000} className="checkout_carousel">
//         <Carousel.Item>
//         {/* <Carousel.Item interval={5000}>
//           <nappy src={prd1} alt='prd1' text="First slide" style={{ width: '100%', height: 'auto' }}/>
//           <Carousel.Caption>
//             <h3><span className='colorway'>#1</span> for Brooklyn's Beauties</h3>
//             <p>All your needs in <span className='colorway'>ONE PLACE</span>.</p>
//           </Carousel.Caption>
//         </Carousel.Item> */}
//           <div className="carousel_image" 
//           <nappy src={nappy} 
//           style={{ backgroundImage: linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)) }}/>
         
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="carousel_image" style={{ backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url('../materials/nappy.png')` }}>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="carousel_image" style={{ backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url('../materials/nappy.png')` }}>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="carousel_image" style={{ backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url('../materials/nappy.png')` }}>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="carousel_image" style={{ backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)), url('../materials/nappy.png')` }}>
//           </div>
//         </Carousel.Item>
//       </Carousel>

//       <div className="checkout_content">
//         <div className="checkout_left">
//           <nappy className='checkout_ad' src='/path-to-skincare-image.png' alt="skincare-photo-ad" />
//           <div>
//             <h2 className='checkout_title'>Your Shopping Cart</h2>
//             <div className="product_slider">
//               {Array.isArray(cart) && cart.length > 0 ? (
//                 cart.map(item => (
//                   <CheckProduct
//                     key={item.id}
//                     id={item.id}
//                     title={item.title}
//                     image={item.image}
//                     price={item.price}
//                   />
//                 ))
//               ) : (
//                 <p>Your cart is empty</p>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="checkout_right">
//           <Subtotal />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;







// import React, { useState, useEffect } from 'react';
// import "./Checkout.css";
// import Subtotal from './Subtotal';
// import CheckProduct from './CheckProduct'; 
// import { useStateValue } from '../../StateProvider';

// // Array of background images
// const images = [
//   require('../materials/nappy.png'),
//   require('../materials/nappy2.png'),
//   require('../materials/nappy3.png'),
//   require('../materials/nappy4.png'),
//   require('../materials/timamiroshnichenko.jpg')
// ];

// const Checkout = () => {
//   const [{ cart }, dispatch] = useStateValue();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Carousel effect for background images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000); // Change image every 4 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="checkout" style={{
//       backgroundImage: `url(${images[currentImageIndex]})`,
//       backgroundRepeat: 'no-repeat',
//       backgroundSize: 'cover',
//       opacity: 2.9
//     }}>
//       <div className="checkout_left">
//         <nappy 
//           className='checkout_ad'
//           src={require('../materials/skincare.png')} 
//           alt="skincare-photo-ad" 
//         />

//         <div>
//           <h2 className='checkout_title'>Your Shopping Cart</h2>
//           {Array.isArray(cart) && cart.length > 0 ? (
//             <div className="checkout_products">
//               {cart.map(item => (
//                 <CheckProduct
//                   key={item.id}
//                   id={item.id}
//                   title={item.title}
//                   image={item.image}
//                   price={item.price}
//                 />
//               ))}
//             </div>
//           ) : (
//             <p>Your cart is empty</p>
//           )}
//         </div>
//       </div>

//       <div className="checkout_right">
//         <Subtotal />
//       </div>
//     </div>
//   );
// }

// export default Checkout;




// import React from 'react';
// import "./Checkout.css";
// import tima from "../materials/timamiroshnichenko.jpg";
// import Subtotal from './Subtotal';
// // CheckProduct is before checkout, it is the base where all the selected products are pulled together and presented
// import CheckProduct from './CheckProduct'; 
// import { useStateValue } from '../../StateProvider';
// import skincare from '../materials/skincare.png';

// const Checkout = () => {
//   const [{ cart }, dispatch] = useStateValue();

//   console.log('Cart:', cart); // Debugging line to check cart structure

//   return (
//     <div className="checkout" style={{backgroundImage: `linear-gradient(rgba(129, 38, 38, 0.5), rgba(39, 69, 158, 0.391)),
//     url(${tima})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', opacity: 2.9}}>
//       <div className="checkout_left">
//         <nappy 
//           className='checkout_ad'
//           src={skincare} 
//           alt="skincare-photo-ad" 
//         />

//         <div>
//           <h2 className='checkout_title'>Your Shopping Cart</h2>
//           {Array.isArray(cart) && cart.length > 0 ? (
//             cart.map(item => (
//               <CheckProduct
//                 key={item.id}
//                 id={item.id}
//                 title={item.title}
//                 image={item.image}
//                 price={item.price}
//               />
//             ))
//           ) : (
//             <p>Your cart is empty</p>
//           )}
//         </div>
//       </div>

//       <div className="checkout_right">
//         <Subtotal />
//       </div>
//     </div>
//   );
// }

// export default Checkout;




