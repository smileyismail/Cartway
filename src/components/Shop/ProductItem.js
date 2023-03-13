import { useDispatch } from "react-redux";

import { cartSliceActions } from "../../Store/cartSlice";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, price, description, image } = props;

  function addToCartHandler() {
    dispatch(
      cartSliceActions.addItemToCart({
        id: id,
        title: title,
        price: price,
        description: description,
        image: image,
      })
    );
  }

  return (
    <li className="flex flex-col justify-start items-start p-4 gap-3 max-w-xs border-[1px] border-action rounded-xl text-textBlackMedium">
      <img src={image} alt="_" className="w-36 h-40 mx-auto" />
      <h3 className="text-xl font-semibold ">{title}</h3>
      <p>{description.slice(0, 150)}...</p>
      <p>
        <b>Color</b> : Blue
      </p>
      <p>In Stock✅</p>

      <div className="mt-auto w-full">
        <p className="mb-2 font-semibold text-lg">₹{price.toFixed(2)}</p>
        <button
          onClick={addToCartHandler}
          className="bg-action py-2 rounded-lg hover:contrast-200 active:scale-105 duration-100 w-full"
        >
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
