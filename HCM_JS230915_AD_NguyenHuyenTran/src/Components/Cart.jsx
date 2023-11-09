import React, { useState, useEffect } from 'react';
import './cart.scss';

const Cart = ({ cart, setCart }) => {

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCartItems);
    }, []);

    const increaseQuantity = (productId) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const decreaseQuantity = (productId) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId && item.quantity > 0) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className='cartContainer'>
            <h2>CART</h2>
            <ul className='cartBody'>
                {cart.map((item, index) => (
                    <li key={index} className='cartItem'>
                        <div className='cartInfo'>
                            <span>{item.product_name}</span>
                            <div className='cartQuantity'>
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
