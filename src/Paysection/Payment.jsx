import React, { useState, useEffect } from 'react';
import './Payment.css';
import CheckProduct from '../components/Checkingout/CheckProduct';
import { useStateValue } from "../StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getCartTotal } from '../reducer';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';
import { db } from '../firebase';
import leavesbck3 from "../components/materials/leavesbck3.png";

const Payment = () => {
    const [{ cart, user }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(null);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        const getClientSecret = async () => {
            try {
                const totalAmount = Math.round(getCartTotal(cart) * 100);
                const response = await axios.post(`/payments/create?total=${totalAmount}`);
                setClientSecret(response.data.clientSecret);
            } catch (error) {
                console.error("Error getting client secret:", error);
                setError("Failed to retrieve payment secret. Please try again later.");
            }
        };
    
        if (cart?.length > 0) {
            getClientSecret();
        }
    }, [cart]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
    
        if (!clientSecret) {
            setError("Failed to initiate payment. Please try again.");
            setProcessing(false);
            return;
        }
    
        try {
            const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            await db.collection('orders').add({
                    cart: cart,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                    name: name,
                    address: address,
                });
    
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            
            dispatch({ type: 'EMPTY_CART' });
            navigate('/orders');
        } catch (error) {
            console.error("Payment failed:", error);
            setError(`Payment failed: ${error.message}`);
            setProcessing(false);
        }
    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    // Group cart items and calculate total quantity
    const groupCartItems = cart.reduce((acc, item) => {
        if (!acc[item.id]) {
            acc[item.id] = { ...item, quantity: 0 };
        }
        acc[item.id].quantity += item.quantity;
        return acc;
    }, {});

    return (
        <div className='payment' style={{
            backgroundImage: `url(${leavesbck3})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh'
        }}>
            <div className="payment_container">
                <h1>
                    <span style={{ color: "white" }}>
                        Checkout (
                        <Link to="/checkout">{cart?.length} items</Link>)
                    </span>
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>
                            <span style={{ color: "white" }}>Preview Lobby</span>
                        </h3>
                    </div>
                    <div className="payment_items">
                        {Object.values(groupCartItems).map(item => (
                            <CheckProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                // Exclude quantity and removeFromCart from here
                                showQuantity={false}
                                showRemoveButton={false}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3><span style={{ color: "white" }}>Payment Method</span></h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <div className="payment_input">
                                <label htmlFor="name" style={{ color: "white" }}>Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="payment_input">
                                <label htmlFor="address" style={{ color: "white" }}>Address</label>
                                <input 
                                    type="text" 
                                    id="address" 
                                    value={address} 
                                    onChange={(e) => setAddress(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="card_element"
                             >
                                <label htmlFor="card" style={{ color: "white" }}>Card No.</label>
                                <CardElement onChange={handleChange} options={{
                                style: {
                                    base: {
                                        color: '#ffffff', // Default text color
                                        fontSize: '16px',
                                        padding: '10px',
                                        borderRadius: '10px',
                                        '::placeholder': {
                                            color: '#ffffff', // Placeholder text color
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                    complete: {
                                        color: '#00ff00', // Optional: Change color when input is complete
                                    },
                                },
                            }} />
                            </div>
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button className="buy-now" disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;




