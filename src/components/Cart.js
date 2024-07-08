import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total items: {totalItems}</p>
      <p>Total price: ${totalPrice}</p>
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
