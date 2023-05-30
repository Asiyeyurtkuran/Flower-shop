import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../../service/apiClient";
import { useEffect, useState } from "react";
import "./cart.css"


const Cart = () => {
    const location = useLocation();
    const [cartItems, setCartItems] = useState([]);
    const [flowers, setFlowers] = useState([]);


    const removeFromCart = (flower) => {
        setCartItems({ ...cartItems, [flower.id]: cartItems[flower.id] - 1 });
    };



    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = flowers.find((flower) => flower.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };
    useEffect(() => {
        if (location.pathname === "/cart") {
            const fetchData = async () => {
                try {
                    const cartRes = await get("cart");
                    setCartItems(cartRes.data);

                    const flowersRes = await get("shop");
                    setFlowers(flowersRes.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };

            fetchData();
        }
    }, [location]);

    console.log("items", cartItems);

    const getFlowerById = (flowerId) => {
        return flowers?.find((flower) => flower.id === flowerId);
    };

    return (
        <>
            <div className="cart">
                <h2>Cart</h2>

                {cartItems && cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems?.map((item) => {
                            const flower = getFlowerById(item.flowerId);

                            return (
                                <>
                                    <li className="cartList" key={item.id}>
                                        {flower ? (
                                            <>
                                                <div style={{ flex: 1 }}>
                                                    <img
                                                        className="flowerImg"
                                                        src={require(`./../../assets/data/${flower.image}`)}
                                                        alt={flower.name}
                                                    />
                                                </div>

                                                <div style={{ flex: 2 }}>
                                                    <p>{flower.name}</p>
                                                </div>

                                                <div style={{ flex: 1 }}>
                                                    <p>Price: £{flower.price}</p>
                                                </div>

                                                <div className="removeDiv" style={{ flex: 2 }}>
                                                    <button className="removeBttn" onClick={removeFromCart}> Remove From Cart </button>
                                                </div>
                                            </>
                                        ) : (
                                            <p>Flower not found</p>
                                        )}
                                    </li>

                                </>
                            );


                        })}
                    </ul>

                )}
                <div className="total">
                    <div >
                        <h3>Total:</h3>
                    </div>
                    <div>
                        <h3> </h3>
                    </div>
                </div>
            </div>
            <button className="checkoutBttn">Checkout</button>
        </>
    );
};

export default Cart;
