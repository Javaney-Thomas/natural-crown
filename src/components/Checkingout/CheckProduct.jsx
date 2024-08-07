import React from 'react';
import './CheckProduct.css';
import { useStateValue } from "../../StateProvider";

const CheckProduct = ({ id, title, image, price }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id
    });
  };

  return (
    <div className="checkProduct">
      <img src={image} alt={title} className="checkProduct_image" />

      <div className="checkProduct_info">
        <p className="checkProduct_title">{title}</p>
        <p className="checkProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromCart}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckProduct;




// import React from 'react';
// import './CheckProduct.css'
// import { useStateValue } from "../../StateProvider";


// const CheckProduct = (id, title, image, price) => {
//     const [{ cart }, dispatch] = useStateValue();

//     const removeFromCart = () => {
//         dispatch({
//             type: "REMOVE_FROM_CART", 
//             id: id, 
//             title: title,
//             image: image,
//             price: price
//         })
//     }

//   return (
//     <div className="checkProduct">
//     <img src={image} alt="" className="checkProduct_image" />

//     <div className="checkProduct_info">
//         <p className="checkProduct_title">{title}</p>
//         <p className="checkProduct_price">
//             <small>$</small>
//             <strong>{price}</strong>
//         </p>
//         <button onClick={removeFromCart}>Remove From Basket</button>
//     </div>
// </div>
//   )
// }

// export default CheckProduct;

