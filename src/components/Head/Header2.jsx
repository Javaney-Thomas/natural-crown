import React from 'react';
import './Header2.css';
import QueenLogo from "../materials/QueenLogo.png";
import Carousel from 'react-bootstrap/Carousel';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Header2 = () => {
  return (
    <div className="header2">
      <img className='header2-logo' src={QueenLogo} alt='logo' />
      <div className="header2-right">
        <div className="header2-carousel-container">
          <div className="header2-carousel">
            <Carousel>
              <Carousel.Item interval={3500}>
                <div className="carousel-text">
                  <h2 style={{ color: '#FAD700' }}>Be Your Own Kind Of Beautiful!</h2>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={4000}>
                <div className="carousel-text">
                  <h2 style={{ color: 'red' }}>Be Your Own Kind Of Beautiful!</h2>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <div className="carousel-text">
                  <h2 style={{ color: 'green' }}>Be Your Own Kind Of Beautiful!</h2>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="shopbag">
            <ShoppingBagIcon />
          </div>
        </div>
        <div className='header2-navsection'>
          <div className="header2-navlinks"><h2>Home</h2></div>
          <div className="header2-navlinks"><h2>Why Crowned Naturally?</h2></div>
          <div className="header2-navlinks"><h2>All Products</h2></div>
          <div className="header2-navlinks"><h2>Contact Us</h2></div>
          <div className="header2-navlinks"><h2><button id="appnt-btn">Book An Appointment</button></h2></div>
        </div>
      </div>
    </div>
  )
}

export default Header2;



// import React from 'react';
// import './Header2.css';
// import QueenLogo from "../materials/QueenLogo.png";
// import Carousel from 'react-bootstrap/Carousel';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

// const Header2 = () => {
//   return (
//     <div className="header2">
//       <img className='header2-logo' src={QueenLogo} alt='logo' />
//       <div className="header2-right">
//         <div className="header2-carousel-container">
//           <div className="header2-carousel">
//             <Carousel>
//               <Carousel.Item interval={3500}>
//                 <div className="carousel-text">
//                   <h2 style={{ color: '#FAD700' }}>Be Your Own Kind Of Beautiful!</h2>
//                 </div>
//               </Carousel.Item>
//               <Carousel.Item interval={4000}>
//                 <div className="carousel-text">
//                   <h2 style={{ color: 'red' }}>Be Your Own Kind Of Beautiful!</h2>
//                 </div>
//               </Carousel.Item>
//               <Carousel.Item interval={5000}>
//                 <div className="carousel-text">
//                   <h2 style={{ color: 'green' }}>Be Your Own Kind Of Beautiful!</h2>
//                 </div>
//               </Carousel.Item>
//             </Carousel>
//           </div>
//           <div className="shopbag">
//             <ShoppingBagIcon />
//           </div>
//         </div>
//         <div className='header2-navsection'>
//           <div className="header2-navlinks"><h2>Home</h2></div>
//           <div className="header2-navlinks"><h2>Why Crowned Naturally?</h2></div>
//           <div className="header2-navlinks"><h2>All Products</h2></div>
//           <div className="header2-navlinks"><h2>Contact Us</h2></div>
//           <div className="header2-navlinks"><h2><button id="appnt-btn">Book An Appointment</button></h2></div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header2;






// import React from 'react';
// import './Header2.css';
// import QueenLogo from "../materials/1 Main Website Information/QueenLogo.png";
// import Carousel from 'react-bootstrap/Carousel';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

// const Header2 = () => {
//   return (
//     <div className="header2">
//       <img className='header2-logo' src={QueenLogo} alt='logo' />
//       <div className="header2-carousel">
//         <Carousel>
//           <Carousel.Item interval={3500}>
//             <div className="carousel-text">
//               <h2 style={{ color: '#FAD700' }}>Be Your Own Kind Of Beautiful!</h2>
//             </div>
//           </Carousel.Item>
//           <Carousel.Item interval={4000}>
//             <div className="carousel-text">
//               <h2 style={{ color: 'red' }}>Be Your Own Kind Of Beautiful!</h2>
//             </div>
//           </Carousel.Item>
//           <Carousel.Item interval={5000}>
//             <div className="carousel-text">
//               <h2 style={{ color: 'green' }}>Be Your Own Kind Of Beautiful!</h2>
//             </div>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//       <div className="header2-navsection">
//         <div><h2>Cart</h2></div>
//         <div className="shopbag">
//           <ShoppingBagIcon />
//         </div>
//         <div className="header2-navlinks"><h2>Home</h2></div>
//         <div className="header2-navlinks"><h2>All Products</h2></div>
//         <div className="header2-navlinks"><h2>Contact Us</h2></div>
//         <div className="header2-navlinks"><h2>Why Crowned Naturally?</h2></div>
//       </div>
//     </div>
//   )
// }

// export default Header2;
