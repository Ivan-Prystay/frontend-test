import Shop from '../pages/Shop/Shop';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';

import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { useState } from 'react';

function App() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [order, setOrder] = useState([]);
  console.log('order: ', order);
  return (
    <>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <Shop
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          }
        />
        <Route
          path="/shoppingcart"
          element={
            <ShoppingCart
              selectedProduct={selectedProduct}
              setOrder={setOrder}
            />
          }
        />
        <></>
      </Routes>
    </>
  );
}

export default App;
