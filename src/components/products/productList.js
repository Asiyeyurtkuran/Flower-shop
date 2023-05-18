// import React, { useContext } from "react";
// import { ShopContext } from '../../context/context'
// import { useState } from "react";


// const ProductList = (props) => {
//   const { id, productName, category, subCategory, description, productImage, price } = props.data;
//   const { addToCart, cartItems, addToWishList } = useContext(ShopContext);
//   const cartItemCount = cartItems[id];

//   const [isAddedToWishList, setIsAddedToWishList] = useState(false);

//   const handleAddToWishList = () => {
//     setIsAddedToWishList(true);
//   };


//   return (
//     <div className='listofProduct'>
//       <img className='productImg' src={productImage} alt='' />
//       <div className='inf'>
//         <h2 className='productName'>{productName}</h2>
//         <p className='price'> £{price}</p>
//       </div>
//       <button className='addToCartBttn' onClick={() => addToCart(id)}>
//         Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>} </button>

//       <button className='addtoWishListBttn' onClick={() => {
//         addToWishList(id); 
//         handleAddToWishList();
//         }} >
//       {isAddedToWishList ? 'Added to Wish List' : 'Add to Wish List'}
//     </button>
//     </div >
//   )
// }

// export default ProductList

