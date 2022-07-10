import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
const CartItem = (props) => {
  const { title, quantity, total, price, key, id } = props.item;
  const dispatch = useDispatch()
  const cartItemRemove = () => {
    dispatch(cartActions.removeCartItem(id))
  }

  const addCartItem = () => {
    dispatch(cartActions.addItemToCart({
      name: title,
      price: price,
      id: id,

    }))
  }
  return (
    <li className={classes.item} key={key}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={cartItemRemove}>-</button>
          <button onClick={addCartItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
