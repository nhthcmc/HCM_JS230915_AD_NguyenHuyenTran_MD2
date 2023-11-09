import React, { useEffect, useState } from 'react';

const Cart = ({ load, setLoad}) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') ?? "[]"))

    function getProductInfor(productId) {
        return JSON.parse(localStorage.getItem('products') ?? "[]").find(product => product.id == productId)
    }

    useEffect(() => {
        setCart(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
    }, [load])

    return (
        <div className='cartContainer'>
            <h1>GIỎ HÀNG</h1>
            <div className='cartBody'>
                <ul className='cartItems'>
                    {cart.map(product => (
                            <li key={product.id}>
                                <div>{product.product_name}</div>
                                <div>{product.price}</div>
                                <div>{product.quantity}</div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Cart;
