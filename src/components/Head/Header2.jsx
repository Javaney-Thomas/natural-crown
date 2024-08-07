import React, { useState } from 'react';
import './Header2.css';
import QueenLogo from "../materials/QueenLogo.png";
import Carousel from 'react-bootstrap/Carousel';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Offcanvas, Button, Form, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { Link as ScrollLink } from 'react-scroll';
import { data } from '../../data'; // Assuming this is the data file you provided

const Header2 = () => {
  const [{ cart }, dispatch] = useStateValue();
  const [show, setShow] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term.length > 2) {
      const results = data.filter(product =>
        product.product_name.toLowerCase().includes(term)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: product.product_id,
        title: product.product_name,
        price: product.price,
      },
    });
    handleClose();
  };

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
            <Link to="/checkout" className="shopbag-link">
              <ShoppingBagIcon style={{ color: '#FAD700' }} />
              <span>{cart?.length}</span>
            </Link>
          </div>
        </div>
        <div className='header2-navsection'>
          <div className="header2-navlinks">
            <Link to="/" className='clr1'>
              <h2>Home</h2>
            </Link>
          </div>
          
          <div className="header2-navlinks">
            <ScrollLink to="why-section" smooth={true} duration={500} className="clr1">
              <h2>Why Crowned Naturally?</h2>
            </ScrollLink>
          </div>

          <div className="header2-navlinks">
            <ScrollLink to="product-list" smooth={true} duration={500} className="clr1">
              <h2>All Products</h2>
            </ScrollLink>
          </div>

          <div className="header2-navlinks">
            <ScrollLink to="contact-us" smooth={true} duration={500} className="clr1">
              <h2>Contact Us</h2>
            </ScrollLink>
          </div>

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
        <div className="offcanvas-overlay"></div>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Crowned-Naturally</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/ProductList" className="offcanvas-link">Products</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Search Products"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((product) => (
                <div key={product.product_id} className="search-result-item">
                  <div>
                    <h5>{product.product_name}</h5>
                    <p>${product.price}</p>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Header2;






