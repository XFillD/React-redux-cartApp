import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const quantity = useSelector((state) => state.cartItem.totalQuantity);
  return (
    <button className={classes.button} onClick={props.cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
