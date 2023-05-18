import React, { useContext, useEffect } from 'react'
import CartItem from './cartItem'
import './cart.css'
import { useNavigate } from "react-router-dom"
import { get } from '../../service/apiClient.js';


import { ShopContext } from '../../context/shopContext.js';


const Cart = (cartItems, flowers, setFlowers, setCartItems) => {

  


    const navigate = useNavigate();

     const handleClickForShopping = (e) => {
         e.preventDefault();
         console.log('clicked');
         navigate('/shop')
     }

     const handleClickForCheckout = (e) => {
         e.preventDefault();
         console.log('clicked');
         navigate('/checkout')
     }

    return (
        <div className='cart'>
            <div className='cartTitle'>
                <h1> Your Cart</h1>
            </div>


 
            <div className='cartItem'>
                {Object.keys(cartItems).map((item) => {
                    if (cartItems[item] > 0) {
                        return <CartItem key={item} data={item} />
                    }
                    return null;
                })}

            </div> 




        </div>
    )
}

export default Cart





// import React, { useContext } from 'react';
// import { ShopContext } from '../../context/shopContext.js';

// const Cart = () => {
//     const { cartItems, getTotalAmount, removeFromCart } = useContext(ShopContext);

//     // Check if cartItems is null before rendering
//     if (cartItems === null) {
//         return <div>Loading...</div>;
//     }

//     const handleRemove = (flower) => {
//         removeFromCart(flower);
//     };

//     return (
//         <div>
//             <h2>Cart</h2>
//             {Object.keys(cartItems).map((itemId) => {
//                 const itemInfo = cartItems[itemId];
//                 return (
//                     <div key={itemId}>
//                         <span>{itemInfo.name}</span>
//                         <span>Quantity: {itemInfo.quantity}</span>
//                         <span>Price: {itemInfo.price}</span>
//                         <button onClick={() => handleRemove(itemInfo)}>Remove</button>
//                     </div>
//                 );
//             })}
//             <div>
//                 <h4>Total Amount: {getTotalAmount()}</h4>
//             </div>
//         </div>
//     );
// };

// export default Cart;



// const Cart = ({ cartItems }) => {
//     return (
//         <div className="cart">
//             <h2>Cart Items</h2>
//             <ul>
//                 {cartItems.map((item) => (
//                     <li key={item.id}>
//                         <p>{item.name}</p>
//                         <p>£ {item.price}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Cart;









// import React from 'react'

// const Cart = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Cart;
