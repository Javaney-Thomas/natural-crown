import React, { useState } from 'react';
import './StaticHomebar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import crown from '../materials/crown.jpg';

const StaticHomebar = ({ color, setColor, setLocationMenuVisible }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="homebar">
                <Container fluid>
                    <Button className="logo-btn" variant="black" onClick={handleShow}>
                        <img src={crown} alt='Crown' className='logo'/>
                    </Button>
                    <Navbar.Brand className="homebar-brandname" href="#">Crowned-Naturally</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">

                        <div className='cstmr-contact'>
                          <Nav className="mr-auto">
                            <Nav.Link href="#about">About Us</Nav.Link>
                            <NavDropdown title="Contact" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#email">Email</NavDropdown.Item>
                                <NavDropdown.Item href="#call">Call Us</NavDropdown.Item>
                                <NavDropdown.Item href="#faqs">FAQ's</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>  
                        </div>

                        <div className='searchbar'>
                            <Form inline>
                            <Form.Control type="search" placeholder="Crown Your Future" />
                            </Form> 
                        </div>

                        <div className='appntmnt-btn'>
                         <Button className='app-Book'>Book An Appointment</Button>   
                        </div> 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Crowned Naturally</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1" onClick={handleClose}>Home</Nav.Link>
                        <Nav.Link href="#action2" onClick={handleClose}>About Us</Nav.Link>
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#email" onClick={handleClose}>Email</NavDropdown.Item>
                            <NavDropdown.Item href="#call" onClick={handleClose}>Call Us</NavDropdown.Item>
                            <NavDropdown.Item href="#faqs" onClick={handleClose}>FAQ's</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default StaticHomebar;


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faPhone, faEnvelope, faInstagram, faLink } from '@fortawesome/free-solid-svg-icons'; // Or '@fortawesome/free-brands-svg-icons' for Instagram if you're using the brand icons
// import { FaMapLocationDot } from "react-icons/fa6";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { SiMinutemailer } from "react-icons/si";
// import { IoLogoInstagram } from "react-icons/io";
// import { IconContext } from "react-icons";
// import {faInstagram } from '@fortawesome/free-brands-svg-icons';
//import { Link } from 'react-router-dom';
//when you hover over the product there is a description of the product'
//animation of page
//keep all color codes

/* <div className="static-header-left">
                <span className="header-locale"
                    onClick={()=> {
                        setColor('black')
                    }}
                >
                    <IconContext.Provider value={{className: "icon"}}>
                        <FaMapLocationDot />
                    </IconContext.Provider>
                    5321 Clarendon Rd, Brooklyn NY 11203
                </span>
                <span className="header-locale">
                <IconContext.Provider value={{className: "icon"}}>
                        <BsFillTelephoneFill />
                </IconContext.Provider>
                    718-766-8819
                </span>
                <span className="header-locale">
                <IconContext.Provider value={{className: "icon"}}>
                        <SiMinutemailer />
                </IconContext.Provider>
                    crownednaturally@gmail.com
                </span>
            </div>

            <div className="static-header-right">
                <div className="link-icons">
                    <span className="ig">
                    <IconContext.Provider value={{className: "icon"}}>
                        <IoLogoInstagram />
                    </IconContext.Provider>
                    </span>
                </div>
                    <span className="ig">
                    <IconContext.Provider value={{className: "icon"}}>
                        <IoLogoInstagram />
                    </IconContext.Provider>
                    </span>
                    <span className="ig">
                    <IconContext.Provider value={{className: "icon"}}>
                        <IoLogoInstagram />
                    </IconContext.Provider>
                    </span>
                    <span className="ig">
                    <IconContext.Provider value={{className: "icon"}}>
                        <IoLogoInstagram />
                    </IconContext.Provider>
                    </span>
                </div> */

