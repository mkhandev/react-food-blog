import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const[cartShown, setcartShown] = useState(false);

  const showCartHandler = () => {
    setcartShown(true);
  };

  const hideCartShownHandler = () => {
    setcartShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartShownHandler} /> }
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;