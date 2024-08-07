import React from 'react';
import './Payment.css';
import CheckProduct from '../components/Checkingout/CheckProduct';
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";


const Payment = () => {
    const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className='payment'>
        <div className="payment_container">
            <h1>
                Checkout (
                    <Link to="/checkout">{cart?.length} items
                    </Link>)
            </h1>

            <div className="payment_section">
                <div className="payment-title">
                    <h3>Delivery Address</h3>
                </div>

                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>123 Lane</p>
                    <p>Los Angeles, CA</p>
                </div>

                <div className="payment_section">
                <div className="payment_title">
                    <h3>Review Items</h3>
                </div>
                <div className="payment_items">
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

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Mehtod</h3>
                    </div>
                    <div className="payment_details">
                        {/*Stripe */}
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Payment