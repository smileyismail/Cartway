import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";

import { cartSliceActions } from "../../Store/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id, image } = props.item;

  function incrementItemHandler() {
    dispatch(
      cartSliceActions.addItemToCart({
        id: id,
        title: title,
        quantity: quantity,
        total: total,
        price: price,
      })
    );
  }

  function decrementItemHandler() {
    dispatch(cartSliceActions.removeItemFromCart(id));
  }

  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={image} alt="_" />
      </div>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ₹{total.toFixed(2)} <br />
          <span className={classes.itemPrice}>(₹{price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementItemHandler}>-</button>
          <button onClick={incrementItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
