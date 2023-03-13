import { useDispatch, useSelector } from "react-redux";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import { operationsSliceActions } from "../../Store/operationsSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  function closeCartHandler() {
    dispatch(operationsSliceActions.toggleShowCart());
  }

  return (
    <Modal>
      <div className="p-3 bg-primary max-h-[60vh]">
        <h2 className="text-xl font-semibold my-3"> Your Shopping Cart</h2>
        <ul className={`flex flex-col justify-center gap-3 overflow-scroll`}>
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

        {cartQuantity === 0 && (
          <h3 className="text-center m-6 mt-10">Your Cart is empty</h3>
        )}

        <h2 className="text-end m-4 font-semibold">
          Total : ₹{totalAmount.toFixed(2)}
        </h2>

        <div className="flex flex-row-reverse gap-2">
          <button
            className="border-action bg-action border-[1px] px-4 py-2 rounded-md font-semibold flex justify-center items-center hover:bg-action hover:text-textBlackDark duration-200 active:scale-105"
            onClick={closeCartHandler}
          >
            Order
          </button>
          <button
            className="border-action border-[1px] px-4 py-2 rounded-md font-semibold flex justify-center items-center hover:bg-action hover:text-textBlackDark duration-200 active:scale-105"
            onClick={closeCartHandler}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
