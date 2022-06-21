import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import CartContext from "./Storage/Cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [didSubmitOrder, setDidSubmitOrder] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;



  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const checkoutFormShow = () => {
    setIsCheckout(true)
  }


  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          key={item.id}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const formConform = async (userData) => {
    setIsSubmittingOrder(true);
    await fetch("https://food-55699-default-rtdb.firebaseio.com/order.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items,
      }),
    })
    setIsSubmittingOrder(false)
    setDidSubmitOrder(true)
    cartCtx.clearCart();
  }

  console.log(cartItems);
  const modalAction = <div className="actions">
    <button className="button--alt" onClick={props.onModalHide}>
      Cancel
    </button>
    {hasItems && <button onClick={checkoutFormShow} className="button">Order</button>}
  </div>

  const cartContent = <React.Fragment>
    {cartItems}
    <div className="total">
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {isCheckout && <Checkout onConform={formConform} onCancel={props.onModalHide} />}
    {!isCheckout && modalAction}
  </React.Fragment>

  const isSubmitting = <p>Your Order is is Submitting ...</p>
  const didSubmit = <p>Your Order has been Submitted</p>
  return (
    <Modal onModalHide={props.onModalHide}>
      {!isSubmittingOrder && !didSubmitOrder && cartContent}
      {isSubmittingOrder && !didSubmitOrder && isSubmitting}
      {!isSubmittingOrder && didSubmitOrder && didSubmit}
    </Modal>
  );
};
export default Cart;
