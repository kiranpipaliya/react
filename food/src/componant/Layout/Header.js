import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import "./Header.css";
import HeaderCardButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCardButton onclick={props.onModalShow} />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="food" />
      </div>
    </Fragment>
  );
};

export default Header;
