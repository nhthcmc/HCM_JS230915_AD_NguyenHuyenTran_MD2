import React, { useEffect, useState } from 'react';
import jsonData from './data.json';
import NavBar from './Components/NavBar';
import Products from './Components/Products';
import Cart from './Components/Cart';


const App = () => {
  const [load, setLoad] = useState(false);

  // useEffect(() => {
  //   const storedData = localStorage.getItem('myData');
  //   if (!storedData) {
  //     localStorage.setItem('myData', JSON.stringify(jsonData));
  //   }
  // }, []);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const storedData = localStorage.getItem('myData');
  //   if (storedData) {
  //     setData(JSON.parse(storedData));
  //   }
  // }, []);

  return (
    <div className='wraper'>
      <NavBar />
      <Products load={load} setLoad={setLoad} />
      <Cart load={load} setLoad={setLoad} />

    </div>
  );
};

export default App;
