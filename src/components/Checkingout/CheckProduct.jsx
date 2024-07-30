import React from 'react';
import './CheckProduct.css'
import Subtotal from "./Subtotal";
import { useStateValue } from "../../StateProvider";


const CheckProduct = (id, image, title, price) => {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART", 
            id: id, 
        })
    }

  return (
    <div className="checkProduct">
    <img src={image} alt="" className="checkProduct_image" />

    <div className="checkProduct_info">
        <p className="checkProduct_title">{title}</p>
        <p className="checkProduct_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <button onClick={removeFromCart}>Remove From Basket</button>
    </div>
</div>
  )
}

export default CheckProduct;

