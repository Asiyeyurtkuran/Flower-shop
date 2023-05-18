
import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';

const CartItem = ({ flower }) => {
  const { addToCart, removeFromCart, updateItem } = useContext(ShopContext);

  return (
    <div className='CartItem'>
      <img src={require(`./../../assets/data/${flower.image}`)} alt={flower.name} />
      <div className='cartInfo'>
        <p>{flower.name}</p>
        <p>{flower.description}</p>
        <p>£{flower.price}</p>
      </div>
    </div>
  );
};

export default CartItem;