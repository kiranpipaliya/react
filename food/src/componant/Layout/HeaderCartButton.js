import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Cart/Storage/Cart-context";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnHigLight, setButnHigLight] = useState(false);
  const { items } = cartCtx;

  const numberOfItemsCart = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;

    setButnHigLight(true);

    const timer = setTimeout(() => {
      setButnHigLight(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClass = `button ${btnHigLight ? "bump" : ""}`;
  return (
    <button className={btnClass} onClick={props.onclick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfItemsCart}</span>
    </button>
  );
};

export default HeaderCardButton;
