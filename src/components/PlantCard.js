import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const isInCart = cart.find(item => item.id === plant.id);

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={() => dispatch(addToCart({ ...plant, quantity: 1 }))} disabled={isInCart}>
        {isInCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default PlantCard;
