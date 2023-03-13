import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { operationsSliceActions } from "../../Store/operationsSlice";

const CartButton = (props) => {
  const [btnBump, setBtnBump] = useState(false);
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const items = useSelector((state) => state.cart.items);

  function toggleShowCartHandler() {
    dispatch(operationsSliceActions.toggleShowCart());
  }

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnBump(true);

    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div
      className={`border-action border-[1px] px-4 py-2 rounded-md font-semibold flex justify-center items-center hover:bg-action hover:text-textBlackDark duration-200 active:scale-105 ${
        btnBump && "scale-105"
      }`}
      onClick={toggleShowCartHandler}
    >
      <span>My Cart</span>
      <span className="bg-primary px-6 py-1 ml-3 rounded-xl text-textBlackDark">
        {cartQuantity}
      </span>
    </div>
  );
};

export default CartButton;
