import { useDispatch } from "react-redux";
import Styles from "./ProductItem.module.css";

import Card from "../UI/Card";
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
    <li className={Styles.item}>
      <Card>
        <div className={Styles.container}>
          <div className={Styles.img}>
            <img src={image} alt="bag" />
          </div>
          <div className={Styles.info}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>
              <b>Color</b> : Blue
            </p>
            <p>In Stock✅</p>
          </div>
          <div className={Styles.actions}>
            <div>₹{price.toFixed(2)}</div>
            <button onClick={addToCartHandler}>Add to Cart</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
