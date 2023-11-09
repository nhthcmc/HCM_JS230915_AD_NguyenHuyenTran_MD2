import React, { useEffect, useState } from 'react';
import jsonData from '../data.json';
import './products.scss';

export default function Products({ load, setLoad }) {
    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (!storedData) {
            localStorage.setItem('data', JSON.stringify(jsonData));
        }
    }, []);

    const [productsData, setProductsData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            setProductsData(JSON.parse(storedData));
        }
    }, []);


    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // const addToCart = (productId, quantity) => {
    //     let cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
    //     let cartExist = cart.find(itemFind => itemFind.productId === productId);

    //     if (cartExist) {
    //         cartExist.quantity += quantity;
    //         localStorage.setItem('cart', JSON.stringify(cart));
    //     } else {
    //         localStorage.setItem(
    //             'cart',
    //             JSON.stringify([
    //                 ...cart,
    //                 {
    //                     id: Math.floor(Math.random() * 1000), // Tạo ID ngẫu nhiên
    //                     productId: productId,
    //                     quantity: quantity,
    //                 },
    //             ])
    //         );
    //     }
    //     setLoad(!load);
    // };

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
                                {/* <input type='number' className='quantity' defaultValue='1' /> */}
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


