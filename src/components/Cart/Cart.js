import { useDispatch, useSelector } from "react-redux";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { operationsSliceActions } from "../../Store/operationsSlice";

const Cart = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  function closeCartHandler() {
    dispatch(operationsSliceActions.toggleShowCart());
  }

  return (
    <Modal>
      <div className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
                image: item.image,
              }}
            />
          ))}
        </ul>
        {cartQuantity === 0 && <h3>Your Cart is empty</h3>}
        <h2>Total : ₹{totalAmount.toFixed(2)}</h2>
        <div className={classes.btns}>
          <button onClick={closeCartHandler}>Order</button>
          <button onClick={closeCartHandler}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
