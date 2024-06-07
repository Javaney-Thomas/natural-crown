import React from 'react';
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import './Footer.css';

export const Footer = () => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
      
        const handleSubmit = (event) => {
          event.preventDefault();
      
          // Send the email here
        };
  return (
    <footer className='fg-back'>
        <div>
            <h1>Empowered by The Kairos Family</h1>
            <h1>Subscribe to Our NewsLetter</h1>
            <h3>Subscribe to our newsletter to stay updated</h3>
        </div>
        <div>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter your email"
                  value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
            </Form.Group>
            <button onClick={setEmail}>Subscribe</button>
        </div>
        <div>
            <ul>
                <h2>Contact Us</h2>
                <li>Number</li>
                <li>E-mail</li>
                <li>Location with icon</li>
            </ul>
            <ul>
                <h2>Important Links</h2>
                <li>Home</li>
                <li>About Us</li>
                <li>All Products</li>
                <li>Contact Us</li>
            </ul>
            <ul>
                <h2>Connect With Us</h2>
                <li>IG icon</li>
                <li>general link</li>
                <li>linkedin</li>
            </ul>
        </div>
        <div>
            <h1>Generated by The Kairos Family</h1>
            <h2>2024, Crowned Naturally, All Rights Reserved</h2>
        </div>
    </footer>
  )
}

export default Footer;