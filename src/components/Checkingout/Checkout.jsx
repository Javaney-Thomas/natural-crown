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
  const [{ cart }] = useStateValue();

  // Group items by id and count their quantities
  const groupedCart = cart.reduce((acc, item) => {
    const foundItem = acc.find(i => i.id === item.id);
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

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
        <div className="checkout_products_container">
          <h2 className="checkout_title">Your Shopping Cart</h2>
          <div className="checkout_products_wrapper">
            <button className="scroll-arrow left-arrow" onClick={() => scroll(-1)}>‹</button>
            <div className="checkout_products">
              {groupedCart.length > 0 ? (
                groupedCart.map(item => (
                  <CheckProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
            <button className="scroll-arrow right-arrow" onClick={() => scroll(1)}>›</button>
          </div>
        </div>
        <div className="subtotal-center">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

const scroll = (direction) => {
  const container = document.querySelector('.checkout_products');
  const scrollAmount = container.offsetWidth / 2;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
};

export default Checkout;




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

// const Checkout = () => {
//   const [{ cart }] = useStateValue();

//   // Group items by id and count their quantities
//   const groupedCart = cart.reduce((acc, item) => {
//     const foundItem = acc.find(i => i.id === item.id);
//     if (foundItem) {
//       foundItem.quantity += 1;
//     } else {
//       acc.push({ ...item, quantity: 1 });
//     }
//     return acc;
//   }, []);

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
//         <div className="checkout_products_container">
//           <h2 className="checkout_title">Your Shopping Cart</h2>
//           <div className="checkout_products_wrapper">
//             <button className="scroll-arrow left-arrow" onClick={() => scroll(-1)}>‹</button>
//             <div className="checkout_products">
//               {groupedCart.length > 0 ? (
//                 groupedCart.map(item => (
//                   <CheckProduct
//                     key={item.id}
//                     id={item.id}
//                     title={item.title}
//                     image={item.image}
//                     price={item.price}
//                     quantity={item.quantity}
//                   />
//                 ))
//               ) : (
//                 <p>Your cart is empty</p>
//               )}
//             </div>
//             <button className="scroll-arrow right-arrow" onClick={() => scroll(1)}>›</button>
//           </div>
//         </div>
//         <div className="subtotal-center">
//           <Subtotal />
//         </div>
//       </div>
//     </div>
//   );
// };

// const scroll = (direction) => {
//   const container = document.querySelector('.checkout_products');
//   const scrollAmount = container.offsetWidth / 2;
//   container.scrollLeft += direction * scrollAmount;
// };

// export default Checkout;



