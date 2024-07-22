import React from 'react';
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import './Footer.css';
import leavesbck3 from '../materials/leavesbck3.png';
import systemcallphone from '../materials/systemcallphone.gif';
import systememail from '../materials/systememail.gif';
import systemlocation from '../materials/systemlocation.gif';
import instagram from '../materials/instagram.svg';
import link45 from '../materials/link45deg.svg';
import linkedin from '../materials/linkedin.svg';

export const Footer = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message:''
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
            <div className='fg-back'>
                <div className="background-image"></div>
                <div className="leftsection">
                    <div className="bannerheader">
                        <h2><span className="bannerclr">Get In Touch With Us</span></h2>
                        <p>Fill in the contact form to share your message and your contact details with us.</p>
                    </div>
                    <div className="linkssection">
                        <div className="column">
                            <div className="gif">
                                <img src={systemcallphone} alt="gif1" className='specgif' />
                                <div>
                                    <h4>PHONE NUMBER</h4>
                                    <p>718-766-8819</p>
                                </div>
                            </div>
                            <div className="gif">
                                <img src={systemlocation} alt="gif2" className='specgif' />
                                <div>
                                    <h4>LOCATION</h4>
                                    <p>5321 Clarendon Rd,<br />Brooklyn, NY 11203</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="gif">
                                <img src={systememail} alt="gif3" className='specgif' />
                                <div>
                                    <h4>EMAIL ADDRESS</h4>
                                    <p>crownednaturally@gmail.com</p>
                                </div>
                            </div>
                            <div className="lastseticons">
                                <div className="icon-container"><img src={instagram} alt="ig-icon" /></div>
                                <div className="icon-container"><img src={link45} alt="link-icon" /></div>
                                <div className="icon-container"><img src={linkedin} alt="linkedin-icon" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightsection'>
                    <div className='form-fill'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formFirstName">
                                <Form.Control className='boxclr'
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formLastName">
                                <Form.Control className='boxclr'
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Control className='boxclr'
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formPhone">
                                <Form.Control className='boxclr'
                                    type="tel"
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Control className='boxclr'
                                    as="textarea"
                                    rows={4}
                                    placeholder="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button className='btnclr' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;












// import React from 'react';
// import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import './Footer.css';
// import leavesbck3 from '../materials/leavesbck3.png';
// import systemcallphone from '../materials/systemcallphone.gif';
// import systememail from '../materials/systememail.gif';
// import systemlocation from '../materials/systemlocation.gif';
// import instagram from '../materials/instagram.svg';
// import link45 from '../materials/link45deg.svg';
// import linkedin from '../materials/linkedin.svg';

// export const Footer = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message:''
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle form submission logic here
//     };

//     return (
//         <footer>
//             <div className='fg-back'>
//                 <div className="background-image">
//                     <img src={leavesbck3} alt='img' />
//                 </div>
//                 <div className="leftsection">
//                     <div className="bannerheader">
//                         <h2><span className="bannerclr">Get In Touch With Us</span></h2>
//                         <p>Fill in the contact form to share your message and your contact details with us.</p>
//                     </div>
//                     <div className="linkssection">
//                         <div className="gif">
//                             <img src={systemcallphone} alt="gif1" className='specgif' />
//                             <div>
//                                 <h4>PHONE NUMBER</h4>
//                                 <p>718-766-8819</p>
//                             </div>
//                         </div>
//                         <div className="gif">
//                             <img src={systemlocation} alt="gif2" className='specgif' />
//                             <div>
//                                 <h4>LOCATION</h4>
//                                 <p>5321 Clarendon Rd,<br />Brooklyn, NY 11203</p>
//                             </div>
//                         </div>
//                         <div className="gif">
//                             <img src={systememail} alt="gif3" className='specgif' />
//                             <div>
//                                 <h4>EMAIL ADDRESS</h4>
//                                 <p>crownednaturally@gmail.com</p>
//                             </div>
//                         </div>
//                         <div className="lastseticons">
//                             <img src={instagram} alt="ig-icon" />
//                             <img src={link45} alt="link-icon" />
//                             <img src={linkedin} alt="linkedin-icon" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className='rightsection'>
//                     <div className='form-fill'>
//                         <Form onSubmit={handleSubmit}>
//                             <Form.Group controlId="formFirstName">
//                                 <Form.Control className='boxclr'
//                                     type="text"
//                                     placeholder="First Name"
//                                     name="firstName"
//                                     value={formData.firstName}
//                                     onChange={handleChange}
//                                 />
//                             </Form.Group>
//                             <Form.Group controlId="formLastName">
//                                 <Form.Control className='boxclr'
//                                     type="text"
//                                     placeholder="Last Name"
//                                     name="lastName"
//                                     value={formData.lastName}
//                                     onChange={handleChange}
//                                 />
//                             </Form.Group>
//                             <Form.Group controlId="formEmail">
//                                 <Form.Control className='boxclr'
//                                     type="email"
//                                     placeholder="Email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />
//                             </Form.Group>
//                             <Form.Group controlId="formPhone">
//                                 <Form.Control className='boxclr'
//                                     type="tel"
//                                     placeholder="Phone Number"
//                                     name="phone"
//                                     value={formData.phone}
//                                     onChange={handleChange}
//                                 />
//                             </Form.Group>
//                             <Form.Group controlId="formPhone">
//                                 <Form.Control className='boxclr'
//                                     type="text"
//                                     placeholder="Message"
//                                     name="message"
//                                     value={formData.message}
//                                     onChange={handleChange}
//                                 />
//                             </Form.Group>
//                             <Button className='btnclr' variant="primary" type="submit" >
//                                 Submit
//                             </Button>
//                         </Form>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;
