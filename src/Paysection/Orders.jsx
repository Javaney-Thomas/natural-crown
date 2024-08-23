import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import './Orders.css';
import './Order.css'
import gleavesborder from "../components/materials/gleavesborder.jpg";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const ordersSnapshot = await db.collection('orders').orderBy('created', 'desc').get();
                const ordersList = ordersSnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }));
                setOrders(ordersList);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="orders"
            style={{
                backgroundImage: `url(${gleavesborder})`,
            }}
        >
            <h2>Your Orders</h2>
            <div className="orders_list">
                {orders.map(order => {
                    // Group items by id and count their quantities
                    const groupedCart = order.data.cart.reduce((acc, item) => {
                        const foundItem = acc.find(i => i.id === item.id);
                        if (foundItem) {
                            foundItem.quantity += 1;
                        } else {
                            acc.push({ ...item, quantity: 1 });
                        }
                        return acc;
                    }, []);

                    return (
                        <div key={order.id} className="order">
                            <h3>Name: {order.data.name}</h3>
                            <p>Address: {order.data.address}</p>
                            <p>Order Total: ${(order.data.amount / 100).toFixed(2)}</p>
                            <div className="order_items">
                                {groupedCart.map(item => (
                                    <div key={item.id} className="order_item">
                                        <p>{item.title}</p>
                                        <p>Price: ${item.price}</p>
                                        <p>Quantity: {item.quantity}</p> {/* Display quantity here */}
                                    </div>
                                ))}
                            </div>
                            <p>Order placed on: {new Date(order.data.created * 1000).toLocaleString()}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Orders;

// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase';
// import './Orders.css';
// import { useStateValue } from '../StateProvider';
// import Order from './Order';
// import gleavesborder from "../components/materials/gleavesborder.jpg";

// const Orders = () => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         // Fetch orders from Firestore
//         const fetchOrders = async () => {
//             try {
//                 const ordersSnapshot = await db.collection('orders').orderBy('created', 'desc').get();
//                 const ordersList = ordersSnapshot.docs.map(doc => ({
//                     id: doc.id,
//                     data: doc.data(),
//                 }));
//                 setOrders(ordersList);
//             } catch (error) {
//                 console.error("Error fetching orders:", error);
//             }
//         };

//         fetchOrders();
//     }, []);

//     return (
//         <div className="orders"
//         style={{
//             backgroundImage: `url(${gleavesborder})`,
//             }}
//         >
//             <h2>Your Orders</h2>
//             <div className="orders_list">
//                 {orders.map(order => (
//                     <div key={order.id} className="order">
//                         <h3>Name: {order.data.name}</h3>
//                         <p>Address: {order.data.address}</p>
//                         <p>Order Total: ${(order.data.amount / 100).toFixed(2)}</p>
//                         <div className="order_items">
//                             {order.data.cart.map((item, index) => (
//                                 <div key={index} className="order_item">
//                                     <p>{item.title}</p>
//                                     <p>Price: ${item.price}</p>
//                                     <p>Quantity: {item.quantity}</p>
//                                 </div>
//                             ))}
//                         </div>
//                         <p>Order placed on: {new Date(order.data.created * 1000).toLocaleString()}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Orders;


// import React, { useState, useEffect } from 'react';
// import './Orders.css';
// import { db } from '../firebase';
// import { useStateValue } from '../StateProvider';
// import Order from './Order';

// const Orders = () => {
//     const [{ user }] = useStateValue();
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         if (orders) {
//             db
//             .collection('users')
//             .doc(user?.uid)
//             .collection('orders') // Fixed typo here
//             .orderBy('created', 'desc')
//             .onSnapshot(snapshot => (
//                 setOrders(snapshot.docs.map(doc => ({
//                     id: doc.id,
//                     data: doc.data(),
//                 })))
//             ));
//         } else {
//             setOrders([]);
//         }
//     }, [user]);

//     return (
//         <div className="orders">
//             <h1>Your Orders</h1>
//             <div className="orders_order">
//                 {orders.length === 0 ? (
//                     <p>No orders found.</p>
//                 ) : (
//                     orders.map(order => (
//                         <Order key={order.id} order={order} /> // Added key prop
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Orders;
