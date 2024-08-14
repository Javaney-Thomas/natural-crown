import React, { useState, useEffect } from 'react';
import './Payment.css';
import CheckProduct from '../components/Checkingout/CheckProduct';
import { useStateValue } from "../StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getCartTotal } from '../reducer';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';

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

    useEffect(() => {
        const getClientSecret = async () => {
            try {
                const response = await axios.post(`/payments/create?total=${getCartTotal(cart) * 100}`);
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

    console.log('The Secret is >>>', clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        if (!clientSecret) {
            setError("Failed to initiate payment. Please try again.");
            setProcessing(false);
            return;
        }

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            navigate('/orders');
        }).catch((error) => {
            setError(`Payment failed: ${error.message}`);
            setProcessing(false);
        });
    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>
                    Checkout (
                    <Link to="/checkout">{cart?.length} items</Link>)
                </h1>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>123 Lane</p>
                        <p>NYC</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items</h3>
                    </div>
                    <div className="payment_items">
                        {cart.map(item => (
                            <CheckProduct
                                key={item.id}
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
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

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
                                <button disabled={processing || disabled || succeeded}>
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



//----------------------------------------------------------------------------------------------------------------------------//
// import React, { useState, useEffect } from 'react';
// import './Payment.css';
// import CheckProduct from '../components/Checkingout/CheckProduct';
// import { useStateValue } from "../StateProvider";
// import { Link, useNavigate } from "react-router-dom";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { getCartTotal } from '../reducer';
// import CurrencyFormat from 'react-currency-format';
// import axios from '../axios';

// const Payment = () => {
//     const [{ cart, user }, dispatch] = useStateValue();
//     const navigate = useNavigate();

//     const stripe = useStripe();
//     const elements = useElements();

//     const [succeeded, setSucceeded] = useState(false);
//     const [processing, setProcessing] = useState("");
//     const [error, setError] = useState(null);
//     const [disabled, setDisabled] = useState(true);
//     const [clientSecret, setClientSecret] = useState(null); // Initialized to null

//     useEffect(() => {
//         const getClientSecret = async () => {
//             try {
//                 const response = await axios({
//                     method: 'post',
//                     url: `/payments/create?total=${getCartTotal(cart) * 100}`
//                 });
//                 setClientSecret(response.data.clientSecret);
//             } catch (error) {
//                 console.error("Error getting client secret:", error);
//                 // Handle error (e.g., display a message to the user)
//                 setError("Failed to retrieve payment secret. Please try again later.");
//             }
//         };
    
//         if (cart?.length > 0) {
//             getClientSecret();
//         }
//     }, [cart]);
//         // Generate the special Stripe secret which allows us to charge a customer
//     //     const getClientSecret = async () => {
//     //         const response = await axios ({
//     //             method: 'post',
//     //             url: `/payments/create?total=${getCartTotal(cart) * 100}`
//     //         });
//     //         setClientSecret(response.data.clientSecret)
//     //         // try {
//     //         //     const response = await axios.post(`/payments/create?total=${getCartTotal(cart) * 100}`);
//     //         //     setClientSecret(response.data.clientSecret);
//     //         // } catch (error) {
//     //         //     console.error("Error getting client secret:", error);
//     //         //     // Handle error (e.g., display a message to the user)
//     //         // }
//     //     };

//     //     getClientSecret();
//     // }, [cart]);
    
//     console.log('The Secret is >>>', clientSecret)

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setProcessing(true);

//         if (!clientSecret) {
//             setError("Failed to initiate payment. Please try again.");
//             setProcessing(false);
//             return;
//         }

//         const payload = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: elements.getElement(CardElement),
//             },
//         }).then(({ paymentIntent }) => {
//             // PaymentIntent = payment confirmation
//             setSucceeded(true);
//             setError(null);
//             setProcessing(false);

//             navigate('/orders');
//         }).catch((error) => {
//             setError(`Payment failed: ${error.message}`);
//             setProcessing(false);
//         });
//     };

//     const handleChange = (e) => {
//         setDisabled(e.empty);
//         setError(e.error ? e.error.message : "");
//     };

//     return (
//         <div className='payment'>
//             <div className="payment_container">
//                 <h1>
//                     Checkout (
//                     <Link to="/checkout">{cart?.length} items</Link>)
//                 </h1>

//                 <div className="payment_section">
//                     <div className="payment_title">
//                         <h3>Delivery Address</h3>
//                     </div>
//                     <div className="payment_address">
//                         <p>123 Lane</p>
//                         <p>NYC</p>
//                     </div>
//                 </div>

//                 <div className="payment_section">
//                     <div className="payment_title">
//                         <h3>Review Items</h3>
//                     </div>
//                     <div className="payment_items">
//                         {cart.map(item => (
//                             <CheckProduct
//                                 key={item.id}
//                                 id={item.id}
//                                 title={item.title}
//                                 image={item.image}
//                                 price={item.price}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="payment_section">
//                     <div className="payment_title">
//                         <h3>Payment Method</h3>
//                     </div>
//                     <div className="payment_details">
//                         <form onSubmit={handleSubmit}>
//                             <CardElement onChange={handleChange} />

//                             <div className="payment_priceContainer">
//                                 <CurrencyFormat
//                                     renderText={(value) => (
//                                         <h3>Order Total: {value}</h3>
//                                     )}
//                                     decimalScale={2}
//                                     value={getCartTotal(cart)}
//                                     displayType={"text"}
//                                     thousandSeparator={true}
//                                     prefix={"$"}
//                                 />
//                                 <button disabled={processing || disabled || succeeded}>
//                                     <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
//                                 </button>
//                             </div>

//                             {error && <div>{error}</div>}
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Payment;




//------------------------------------------------------------------------------------------------------------------//



// import React, {useState, useEffect } from 'react';
// import './Payment.css';
// import CheckProduct from '../components/Checkingout/CheckProduct';
// import { useStateValue } from "../StateProvider";
// import { Link, useNavigate } from "react-router-dom";
// import { CardElement, useStripe, useElements }from "@stripe/react-stripe-js";
// import { getCartTotal } from '../reducer';
// import CurrencyFormat from 'react-currency-format';
// import axios from '../axios';

// const Payment = () => {
//     const [{ cart, user }, dispatch] = useStateValue();
//     const navigate = useNavigate();

//     const stripe = useStripe();
//     const elements = useElements();


//     const [succeeded, setSucceeded] = useState(false);
//     const [processing, setProcessing] = useState("");
//     const [error, setError] = useState(null);
//     const [disabled, setDisabled] = useState(true);
//     const [clientSecret, setClientSecret] = useState(true);

//     useEffect(() => {
//         //generate the special stripe secret which allows us to change a customer
//         const getClientSecret= async () => {
//             const response = await axios({
//                 method: 'post',
//                 url: `/payments/create?total=${getCartTotal(cart) * 100}`
//             })
//             setClientSecret(response.data.clientSecret)
//         }

//         getClientSecret();
//     }, [cart])

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setProcessing(true);

//         const payload = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: elements.getElement(CardElement)
//             }
//         }).then(({ paymentIntent }) => {
//         //payment intent equals the payment confirmation

//         setSucceeded(true);
//         setError(null);
//         setProcessing(false)

//         navigate.replace('/orders')
//     })

// }

//     const handleChange = e => {
//         setDisabled(e.empty);
//         setError(e.error ? e.error.message : "");
//     }

//   return (
//     <div className='payment'>
//         <div className="payment_container">
//             {/*Payment section - delivery address */}
//             <h1>
//                 Checkout (
//                     <Link to="/checkout">{cart?.length} items
//                     </Link>)
//             </h1>

//             <div className="payment_section">
//                 <div className="payment-title">
//                     <h3>Delivery Address</h3>
//                 </div>
//                 <div className="payment_address">
//                     <p>123 Lane</p>
//                     <p>NYC</p>
//                 </div>


//                 <div className="payment_section">
//                 <div className="payment_title">
//                     <h3>Review Items</h3>
//                 </div>
//                 <div className="payment_items">
//                     {cart.map(item => (
//                         <CheckProduct
//                         id={item.id}
//                         title={item.title}
//                         image={item.image}
//                         price={item.price}
//                         />
//                     ))}
//                 </div>
//             </div>

//                 <div className="payment_section">
//                     <div className="payment_title">
//                         <h3>Payment Method</h3>
//                     </div>
//                     <div className="payment_details">
//                         {/*Stripe */}
//                         <form onSubmit={handleSubmit}>
//                             <CardElement onChange={handleChange}/>

//                             <div className="payment_priceContainer">
//                                 <CurrencyFormat
//                                     renderText={(value) => (
//                                         <h3>Order Total: {value}</h3>
//                                     )}
//                                     decimalScale={2}
//                                     value={getCartTotal(cart)}
//                                     displayType={"text"}
//                                     thousandSeparator={true}
//                                     prefix={"$"}
//                                 />
//                                 <button
//                                     disabled={processing || disabled || succeeded}>
//                                         <span>{processing ? <p>Processing</p> : 
//                                         "Buy Now"}
//                                         </span>
//                                 </button>
//                             </div>

//                             {error && <div>{error}</div>}
//                         </form>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Payment