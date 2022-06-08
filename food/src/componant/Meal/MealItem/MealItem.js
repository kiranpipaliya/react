import React, { useContext } from "react";
import "./MealItem.css";
import MealForm from "./MealItemForm";
import CartContext from "../../Cart/Storage/Cart-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const onAddCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.name,
    });
  };

  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealForm id={props.id} onAdditemCart={onAddCart} />
      </div>
    </li>
  );
};
export default MealItem;
