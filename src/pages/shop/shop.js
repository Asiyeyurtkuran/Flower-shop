
import React from "react";
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";

import { get } from "../../service/apiClient"
import { useEffect, useState } from "react";
import SideBar from '../../components/sideBar/sideBar.js'


const Shop = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [flowers, setFlowers] = useState([]);
  const [cart, setCart] = useState([]);


  const addToCart = (flower) => {
    const newCart = flowers.find((f) => f.id === flower.id)
    setCart([...cart, newCart]);
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
                    
                    <button className="addToCartBttn" onClick={() => {addToCart(flower); alert(`Added to Cart`); navigate('/cart')}}> Add To Cart </button>
                    <button className="addToWishlistBttn" onClick={() => { alert(`Added to Wish List`); navigate('/wishlist')}} > Add To WishList </button>
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
