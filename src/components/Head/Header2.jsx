import React, { useState } from 'react';
import './Header2.css';
import QueenLogo from "../materials/QueenLogo.png";
import Carousel from 'react-bootstrap/Carousel';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Offcanvas, Button, Form, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';



const Header2 = () => {

  const [{cart}, dispatch] = useStateValue();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="header2">
      <img className='header2-logo' src={QueenLogo} alt='logo' onClick={handleShow} />
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
            <span>Natural Goodies</span>
            <Link to="/checkout" className="shopbag">
              <ShoppingBagIcon />
              <span>{cart?.length}</span>
             
            </Link>
          </div>
        </div>
        <div className='header2-navsection'>
          {/* Fix the color for all links to regular */}
          <div className="header2-navlinks"><Link to="/"><h2>Home</h2></Link></div>

          <div className="header2-navlinks"><h2>Why Crowned Naturally?</h2></div>
          <div className="header2-navlinks"><h2>All Products</h2></div>
          <div className="header2-navlinks"><h2>Contact Us</h2></div>
          <div className="header2-navlinks">
            <h2>
              <a href="https://www.styleseat.com/m/v/MissQ2u" target="_blank" rel="noopener noreferrer">
                <button id="appnt-btn">Book An Appointment</button>
              </a>
            </h2>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas-background">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Crowned-Naturally</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1" onClick={handleClose}><Link to="/ProductList">Products</Link></Nav.Link>
            <Nav.Link href="#action2" onClick={handleClose}>About Us</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="#email" onClick={handleClose}>Email</NavDropdown.Item>
              <NavDropdown.Item href="#call" onClick={handleClose}>Call Us</NavDropdown.Item>
              <NavDropdown.Item href="#faqs" onClick={handleClose}>FAQ's</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="#LetsGlowUp" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
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
//           <div className="header2-navlinks">
//             <h2>
//               <a href="https://www.styleseat.com/m/v/MissQ2u" target="_blank" rel="noopener noreferrer">
//                 <button id="appnt-btn">Book An Appointment</button>
//               </a>
//             </h2></div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header2;



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
