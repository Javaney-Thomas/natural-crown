import React from 'react';
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import './Footer.css';
import leavesbck3 from '../materials/leavesbck3.jpeg';

export const Footer = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <footer>
            <div className='footer-container'>
                <div className='fg-back'>
                    <img src={leavesbck3} alt='img' style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className='form-fill'>
                    <h2>Contact Us</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="..."
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="..."
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="@gmail.com"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="(000)000-000"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;