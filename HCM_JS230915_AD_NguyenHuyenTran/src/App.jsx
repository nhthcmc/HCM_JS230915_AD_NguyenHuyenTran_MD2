import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import Products from './Components/Products';
import Cart from './Components/Cart';


const App = () => {
  const [productsData, setProductsData] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <div className='wraper'>
      <NavBar />
      <Products productsData={productsData} setProductsData={setProductsData} cart={cart} setCart={setCart} />
      <Cart productsData={productsData} setProductsData={setProductsData} cart={cart} setCart={setCart} />

    </div>
  );
};

export default App;
