import React from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import MainHeader from "./components/UI/MainHeader";
import Products from "./components/Shop/Products";

const App = () => {
  const showCart = useSelector((state) => state.operations.cartIsVisible);

  return (
    <div className="bg-primary">
      <MainHeader />
      {showCart && <Cart />}
      <Products />
    </div>
  );
};

export default App;
