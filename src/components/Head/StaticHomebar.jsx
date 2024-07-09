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
import SearchIcon from '@mui/icons-material/Search';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const StaticHomebar = ({ color, setColor, setLocationMenuVisible }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
    <div className="header">
        <Button className="header__logo" variant="black" onClick={handleShow}>
            <img src={crown} alt='Crown' className='logo'/>
            <Navbar>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <div className='header_contact'>
                        <Nav className="mr-auto">
                            <NavDropdown id="basic-nav-dropdown">
                                <NavDropdown.Item href="#email">Email</NavDropdown.Item>
                                <NavDropdown.Item href="#call">Call Us</NavDropdown.Item>
                                <NavDropdown.Item href="#FAQ's">FAQ's</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </Button>
        {/* This is for the seachbar*/}
        <div className='header_search'>
            <input className="header_searchInput" type="text" placeholder="Crown Your Future" />
            <SearchIcon className="header_searchIcon" />
        </div>
        {/* This is for the appointment button */}
        <div className='header_appbtn'>
            <Button>Book An Appointment <AirlineSeatReclineExtraIcon />
            </Button>  {/*Links us out to styleseat */}
        </div> 
        <div className='header_cart'>
            <Button>Cart<ShoppingBagIcon />
            </Button>  {/*DYnamically adds all products */}
        </div> 
    </div>
    <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas-background">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Crowned-Naturally</Offcanvas.Title>
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

