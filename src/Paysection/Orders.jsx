import React, { useState, useEffect } from 'react';
import './Orders.css';
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';
import Order from './Order';

const Orders = () => {
    const [{ user }] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders') // Fixed typo here
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ));
        } else {
            setOrders([]);
        }
    }, [user]);

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders_order">
                {orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    orders.map(order => (
                        <Order key={order.id} order={order} /> // Added key prop
                    ))
                )}
            </div>
        </div>
    );
}

export default Orders;
