import { useDispatch } from "react-redux";

import { FiPlus, FiMinus } from "react-icons/fi";

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
    <li className="flex justify-center items-center border-[1px] border-action rounded-md p-4 bg-white">
      <div className="flex justify-center items-center mr-auto gap-3">
        <img src={image} alt="_" className="w-32" />
        <div className="text-textBlackDark">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-textBlackMedium my-2 text-lg">
            ₹{total.toFixed(2)}
          </p>
          <p className="text-textBlackMedium text-sm">
            (₹{price.toFixed(2)}/item)
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8">
        <div className="font-bold text-xl whitespace-nowrap">
          x <span>{quantity}</span>
        </div>
        <div className="flex gap-6">
          <button onClick={decrementItemHandler}>
            <FiMinus className="bg-red-500 rounded-full text-2xl p-1 text-primary hover:contrast-200 active:scale-110 duration-100" />
          </button>
          <button onClick={incrementItemHandler}>
            <FiPlus className="bg-action rounded-full text-2xl p-1 text-textBlackDark hover:contrast-200 active:scale-110 duration-100" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
