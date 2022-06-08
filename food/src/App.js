import React, { useState } from "react";
import Cart from "./componant/Cart/Cart";
import CartProvider from "./componant/Cart/Storage/CartProvider";
import Header from "./componant/Layout/Header";
import Meals from "./componant/Meal/Meals";

function App() {
  const [modalShowHide, setModalState] = useState(false);

  const modalShow = function () {
    setModalState(true);
  };

  const modalHidde = function () {
    setModalState(false);
  };

  return (
    <CartProvider>
      {modalShowHide && <Cart onModalHide={modalHidde} />}
      <Header onModalShow={modalShow} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
