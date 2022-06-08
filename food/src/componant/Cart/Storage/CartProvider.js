import React, { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const exstingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const exstingItem = state.items[exstingItemIndex];

    let updatedItems;

    if (exstingItem) {
      const updatedItem = {
        ...exstingItem,
        amount: exstingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[exstingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const exstingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const exstingItem = state.items[exstingItemIndex];
    const updatedTotalAmount = state.totalAmount - exstingItem.price;
    let updatedItems;
    if (exstingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...exstingItem, amount: exstingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[exstingItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

  const addCartItemHandler = function (item) {
    dispatchAction({ type: "ADD", item: item });
  };
  const removeCartItemHandler = function (id) {
    dispatchAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
