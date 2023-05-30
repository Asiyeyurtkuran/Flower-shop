
import React from "react";
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";

import { get, post } from "../../service/apiClient"
import { useEffect, useState } from "react";
import SideBar from '../../components/sideBar/sideBar.js'

const Shop = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [flowers, setFlowers] = useState([]);


  const addToCart = async (flower) => {
    console.log(flower)
    await post("cart/add", { "flowerId": flower.id })
  };

  useEffect(() => {
    if (location.pathname === '/shop') {
      const getFlowers = async () => {
        try {
          const res = await get('shop')
          setFlowers(res.data)

        } catch (error) {
          console.error('Error fetching flowers:', error)
        }
      }
      getFlowers()
    }
  }, [location])


  return (
    <div className="overall">

      <SideBar />
      <div className="shop">
        <h1>Shop</h1>
      </div>

      <div className="shopContainer">

        <div className="shopImage">
          <ul className="flowersList">
            {flowers.map((flower) => {
              return (
                <li className="flowers" key={flower.id} >

                  <img className="flowerImg" onClick={() => navigate(`/shop/${flower.id}`)} src={require(`./../../assets/data/${flower.image}`)} alt={flower.name} />
                  <p onClick={() => navigate(`/shop/${flower.id}`)} className="flowerName">{flower.name}</p>
                  <p className="flowerPrice">£ {flower.price}</p>

                  <button className="addToCartBttn" onClick={() => { addToCart(flower); alert(`Added to Cart`); navigate('/cart') }}> Add To Cart </button>
                  <button className="addToWishlistBttn" onClick={() => { alert(`Added to Wish List`); navigate('/wishlist') }} > Add To WishList </button>
                </li>

              )
            })}
          </ul>
        </div>

      </div>
    </div>
  )


}

export default Shop

// import React from "react";
// import "./style.css";
// import { useNavigate, useLocation } from "react-router-dom";

// import { get } from "../../service/apiClient";
// import { useEffect, useState } from "react";
// import SideBar from "../../components/sideBar/sideBar.js";
// import Cart from "../cart/cart";

// const Shop = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [flowers, setFlowers] = useState([]);
//   const [cartItems, setCartItems] = useState([]);

//   // const addToCart = (flower) => {
//   //   // const newCartItem = flowers.find((f) => f.id === flower.id);
//   //   console.log("Adding to Cart:", flower);
//   //   setCartItems([ ...cartItems, flower]);
//   // };

//   const addToCart = (flower) => {
//     const hasAlreadyInCart = cartItems.find((cartItem) => cartItem.id === flower.id);
//     if (hasAlreadyInCart) {
//       alert("already in the basket."); 
//     } else {
//       const newCartItem = flowers.find((f) => f.id === flower.id);
//       setCartItems([...cartItems, newCartItem]);

//       console.log("added your basket.");

//       setTimeout(() => {
//         navigate("/cart");
//       }, 5000);
//     }
//   };

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems))
//     console.log("Cart Items:", cartItems);
//   }, [cartItems]);

//   // useEffect(() => {
//   //   if (location.pathname === "/shop") {
//   //     const getFlowers = async () => {
//   //       try {
//   //         const res = await get("shop");
//   //         setFlowers(res.data);
//   //       } catch (error) {
//   //         console.error("Error fetching flowers:", error);
//   //       }
//   //     };
//   //     getFlowers();
//   //   }
//   // }, [location]);

//   useEffect(() => {
//     fetchList();
//   }, []);

// const fetchList = async () => {
//   try {
//     const res = await get('shop')
//     setFlowers(res.data);
//   } catch (e) {
//     console.log(e)
//   }
// }



//   console.log("cartItems: ",cartItems)
//  // console.log('flowers', flowers)

//   return (
//     <div className="overall">
//       <SideBar />
//       <div className="shop">
//         <h1>Shop</h1>
//       </div>
//       <div className="shopContainer">
//         <div className="shopImage">
//           <ul className="flowersList">
//             {flowers?.map((flower) => {
//               return (
//                 <li className="flowers" key={flower.id}>
//                   <img
//                     className="flowerImg"
//                     onClick={() => navigate(`/shop/${flower.id}`)}
//                     src={require(`./../../assets/data/${flower.image}`)}
//                     alt={flower.name}
//                   />
//                   <p
//                     onClick={() => navigate(`/shop/${flower.id}`)}
//                     className="flowerName"
//                   >
//                     {flower.name}
//                   </p>
//                   <p className="flowerPrice">£ {flower.price}</p>
//                   <button
//                     className="addToCartBttn"
//                     onClick={() => {
//                       addToCart(flower);
//                       alert(`Added to Cart`);
//                       navigate("/cart");
//                     }}
//                   >
//                     Add To Cart
//                   </button>
//                   <button
//                     className="addToWishlistBttn"
//                     onClick={() => {
//                       alert(`Added to Wish List`);
//                       navigate("/wishlist");
//                     }}
//                   >
//                     Add To WishList
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//         <div className="cart">
//           <h2>Cart</h2>
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.id}>
//                   <p>{item.name}</p>
//                   <p>Price: £{item.price}</p>
//                   {/* Additional item details */}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//         <Cart cartItems={cartItems} />
//       </div>
     
      
//     </div>
//   );
// };

// export default Shop;

