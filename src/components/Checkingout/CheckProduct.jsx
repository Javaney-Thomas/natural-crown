import React from 'react';
import './CheckProduct.css';
import { useStateValue } from "../../StateProvider";

const CheckProduct = ({ id, title, image, price, quantity, showQuantity = true}) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id
    });
  };

  // Ensure quantity is a number and default to 0 if it's NaN or undefined
  const quantityValue = Number(quantity) || 0;
  console.log('Received Quantity:', quantityValue); 


  return (
    <div className="checkProduct">
      <img src={image} alt={title} className="checkProduct_image" />

      <div className="checkProduct_info">
        <p className="checkProduct_title">{title}</p>
        <p className="checkProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {quantity && <p className="checkProduct_quantity">Quantity: {quantity}</p>}
        <button id='remove_btn' onClick={removeFromCart}>Remove From Cart</button>
      </div>
    </div>
  );
}

export default CheckProduct;

