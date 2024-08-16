import React, { useState } from 'react';
import './Footer2.css';
import KairosLogo from '../materials/KairosLogo.png';
import { db } from '../../firebase'; // Import Firebase configuration

const Footer2 = () => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    // Basic validation for the email
    const regex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateEmail(email)) {
      try {
        // Add email to Firestore
        await db.collection('subscribers').add({
          email,
          timestamp: new Date()
        });
        alert('Submitted');
        setEmail(''); // Clear the input field
      } catch (error) {
        console.error("Error submitting email: ", error);
        alert('Failed to submit. Please try again later.');
      }
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className='footer-container2'>
      <div className='kairos-bnr'>
        <div className="kairos-logo-container">
          <div className='kairos_logo'>
            <img
              src={KairosLogo}
              alt="kairos_logo"
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                padding: "0",
                background: "transparent",
                margin: "0px"
              }}
            />
          </div>
          <h2>Empowered by The Kairos Family</h2>
        </div>
      </div>
      <div className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="emailfill">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="EmpoweringTheMarket@Kairos.com"
              value={email}
              onChange={handleChange}
              required
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer2;



// import React from 'react';
// import './Footer2.css';
// import KairosLogo from '../materials/KairosLogo.png';
// import { db } from '../../firebase';



// const Footer2 = () => {
//   return (
//     <div className='footer-container2'>
//       <div className='kairos-bnr'>
//         <div className="kairos-logo-container">
          
//           <div className='kairos_logo'>
//             <img src={KairosLogo}
//             alt="kairos_logo"
//             style={{
//               height: "200px",
//               width: "200px",
//               objectFit: "cover",
//               padding: "0",
//               background: "transparent",
//               margin: "0px"}}/>
//           </div>
//           <h2>Empowered by The Kairos Family</h2>
//         </div>
//       </div>
//       <div className="newsletter">
//         <h2>Subscribe to Our Newsletter</h2>
//         <p>Subscribe to our newsletter and stay updated</p>
//         <div className="emailfill">
//           <form action="#" method="post">
//             <input type="email" placeholder="Enter your email" required />
//             <button type="submit" className="subscribe-btn">Subscribe</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer2;
