

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { get } from "../../service/apiClient"
import { useEffect, useState } from "react";



const Vase = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [flowers, setFlowers] = useState([]);
    const [cart, setCart] = useState([]);


    const addToCart = (flower) => {
        const newCart = flowers.find((f) => f.id === flower.id)
        setCart([...cart, newCart]);
    };


    useEffect(() => {
        if (location.pathname === '/shop/vases') {
            const getFlowers = async () => {
                try {
                    const res = await get('shop')
                    const flowers = res.data;
                    const filteredData = flowers.filter(item => item.category?.name === 'vase');
                    setFlowers(filteredData)

                } catch (error) {
                    console.error('Error fetching flowers:', error)
                }
            }
            getFlowers()
        }
    }, [location])


    return (
        <div className="overall">

           
            <div className="shop">
                <h1>Vases</h1>
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

export default Vase
