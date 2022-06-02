import React from "react";
import "./MealItemForm.css";
import Input from "../../UI/Input";
const MealForm = (props) => {
  return (
    <form className="form">
      <Input
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
    </form>
  );
};
export default MealForm;
