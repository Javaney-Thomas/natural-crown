import React from 'react'
import "./Checkout.css";
import gleavesborder from "../materials/gleavesborder.jpg";
import Subtotal from './Subtotal';
import CheckProduct from './CheckProduct';
import { useStateValue } from '../../StateProvider';
import skincare from '../materials/skincare.png';



const Checkout = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="checkout" style={{backgroundImage: `url(${gleavesborder})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="checkout_left">
          <img 
          className='checkout_ad'
          src={skincare} 
          alt="skincare-photo-ad" 
          />

          <div>
            <h2 className='checkout_title'>Your Shopping Cart
            </h2>

            {cart.map(item => (
             <CheckProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            /> 
            ))}
           
          </div>
        </div>

        <div className="checkout_right">
            <Subtotal />
            <h2>Subtotal goes here</h2>
        </div>
    </div>
  )
}

export default Checkout