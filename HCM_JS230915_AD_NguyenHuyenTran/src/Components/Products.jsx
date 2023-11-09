import React, { useEffect, useState } from 'react';
import jsonData from '../data.json';
import './products.scss';

export default function Products({ productsData, setProductsData, cart, setCart}) {
    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (!storedData) {
            localStorage.setItem('data', JSON.stringify(jsonData));
        }
    }, []);

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            setProductsData(JSON.parse(storedData));
        }
    }, []);
    
    const addToCart = (productId) => {
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            const updatedCart = cart.map(item => {
                if (item.id === productId) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
            const productToAdd = productsData.products.find(product => product.id === productId);
            setCart([...cart, { ...productToAdd, quantity: 1 }]);
            localStorage.setItem('cart', JSON.stringify([...cart, { ...productToAdd, quantity: 1 }]));
        }
    };

    return (
        <div className='productsContainer'>
            <h2>DANH SÁCH SẢN PHẨM</h2>
            <ul className='productsBody'>
                {productsData &&
                    productsData.products.map(product => (
                        <li className='productsItem' key={product.id}>
                            <div className='productsImg'>
                                <img src={product.image} alt={product.product_name} />
                            </div>
                            <div className='productsInfo'>
                                <span>{product.product_name}</span>
                                <span>{product.price}</span>
                                <button
                                    onClick={(e) => {
                                        addToCart(product.id);
                                    }}
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}


