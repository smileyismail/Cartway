import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";

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
    <button
      className={`${classes.button} ${btnBump ? classes.bump : ""}`}
      onClick={toggleShowCartHandler}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
