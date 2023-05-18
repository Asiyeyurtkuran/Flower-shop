import { createContext, useEffect, useState } from "react";
import { get } from '../service/apiClient';

export const ShopContext = createContext(null);

const getDefaultCart = (flowers) => {
    let cart = {};
    for (let i = 1; i <= flowers.length; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopProvider = (props) => {
    const [flowers, setFlowers] = useState([]);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const getFlowers = async () => {
            try {
                const res = await get('cart');
                setFlowers(res.data);
                setCartItems(getDefaultCart(res.data))
            } catch (error) {
                console.error('Error fetching flowers:', error);
            }
        };
        getFlowers();
    }, []);

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

    const addToCart = (flower) => {
        setCartItems({ ...cartItems, [flower.id]: cartItems[flower.id] + 1 });
    };

    const removeFromCart = (flower) => {
        setCartItems({ ...cartItems, [flower.id]: cartItems[flower.id] - 1 });
    };

    const updateItem = (newAmount, flowerId) => {
        setCartItems({ ...cartItems, [flowerId]: newAmount})
    }

    const checkout = () => {
        setCartItems(getDefaultCart(flowers))
    }



    const contextValue = {
        flowers,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        updateItem,
        checkout
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

