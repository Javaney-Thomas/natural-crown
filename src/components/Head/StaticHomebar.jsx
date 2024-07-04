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
            <Navbar className="homebar">
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
                            <Form> {/*Has to search entire database*/}
                            <Form.Control type="search" placeholder="Crown Your Future" />
                            </Form> 
                        </div>

                        <div className='appntmnt-btn'>
                         <Button className='app-Book'>Book An Appointment</Button>  {/*Links us out to styleseat */}
                        </div> 

                        <div className="cart-btn">
                            <Button></Button>
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
                        <Nav.Link href="#action1" onClick={handleClose}>Products</Nav.Link> {/* This has to scroll action to products section */}
                        <Nav.Link href="#action2" onClick={handleClose}>About Us</Nav.Link> {/*Routes Us to About Page*/}
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#email" onClick={handleClose}>Email</NavDropdown.Item>
                            <NavDropdown.Item href="#call" onClick={handleClose}>Call Us</NavDropdown.Item>
                            <NavDropdown.Item href="#faqs" onClick={handleClose}>FAQ's</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Form className="d-flex">{/*Able to Search any product once keywords are entered */}
                        <Form.Control type="search" placeholder="#LetsGlowUp" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button> {/* This button has to actively search database*/}
                    </Form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default StaticHomebar;

