import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from "../../store/ui-slice"

const CartButton = (props) => {
  const dispatch = useDispatch();
  const badge = useSelector(state => state.cart.totalQuantities)
  const showCartHandler = () => {
    console.log(badge);
    dispatch(uiActions.toggle())
  }
  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
