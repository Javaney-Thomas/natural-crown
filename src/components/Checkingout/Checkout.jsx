import React from 'react'
import "./Checkout.css";
import gleavesborder from "../materials/gleavesborder.jpg";
import Subtotal from './Subtotal';



const Checkout = () => {
  return (
    <div className="checkout" style={{backgroundImage: `url(${gleavesborder})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh'}}>
        <div className="checkout_left">
            <div>
                <h2 className='checkout_title'>Your Shopping Basket</h2>
                {/*Basket item */}
                {/*Basket item */}
                {/*Basket item */}
                {/*Basket item */}
                {/*Basket item */}
                {/*Basket item */}
                {/*Basket item */}
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