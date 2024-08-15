// import React from 'react';
// import './Order.css';
// import moment from "moment";
// import Checkout from '../components/Checkingout/Checkout';
// import CurrencyFormat from 'react-currency-format';
// import CheckProduct from '../components/Checkingout/CheckProduct';

// const Order = ({ order }) => {
//   return (
//     <div className="order">
//         <h2>Order</h2>
//         <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
//         </p>
//         <p className="order_id">
//             <small>{order.id}</small>
//         </p>
//         {order.data.cart?.map(item => (
//             <CheckProduct
//             id={item.id}
//             title={item.title}
//             image={item.image}
//             price={item.price}
//             />

//         ))}
//         <CurrencyFormat
//             renderText={(value) => (
//                 <h3 className='order_total'>Order Total: {value}</h3>
//             )}
//             decimalScale={2}
//             value={order.data.amount / 100}
//             displayType={"text"}
//             thousandSeparator={true}
//             prefix={"$"}
//         />
//     </div>
//   )
// }

// export default Order

import React from 'react';
import './Order.css';
import moment from "moment";
import CurrencyFormat from 'react-currency-format';
import CheckProduct from '../components/Checkingout/CheckProduct';

const Order = ({ order }) => {
  return (
    <div className="order">
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
        <p className="order_id">
            <small>{order.id}</small>
        </p>
        {order.data.cart?.map(item => (
            <CheckProduct
                key={item.id} // Ensure each item has a unique key
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
            />
        ))}
        <CurrencyFormat
            renderText={(value) => (
                <h3 className='order_total'>Order Total: {value}</h3>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
    </div>
  );
}

export default Order;
