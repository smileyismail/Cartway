import React from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import MainHeader from "./components/Layout/MainHeader";
import Products from "./components/Shop/Products";

const App = () => {
  const showCart = useSelector((state) => state.operations.cartIsVisible);

  return (
    <>
      <MainHeader />
      {showCart && <Cart />}
      <Products />
    </>
  );
};

export default App;
