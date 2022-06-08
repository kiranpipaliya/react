import React, { useRef, useState } from "react";
import "./MealItemForm.css";
import Input from "../../UI/Input";

const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  const addItemFormHandler = function (event) {
    event.preventDefault();
    const enteredValue = amountInputRef.current.value;
    const enteredValueNumber = +enteredValue;

    if (
      enteredValue.trim().length === 0 ||
      enteredValueNumber < 1 ||
      enteredValueNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAdditemCart(enteredValueNumber);
  };
  return (
    <form className="form" onSubmit={addItemFormHandler}>
      <Input
        ref={amountInputRef}
        label="Ammount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please Enter Valid Amount(1-5)</p>}
    </form>
  );
};
export default MealForm;
