import React, { useState, useRef } from "react";
import Button from "../Ui/Button";
import Card from "../Ui/Card";
import "./addUser.css";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const enteredNameInput = useRef();
  const enteredAgeInput = useRef();
  const [error, setError] = useState();
  console.log(enteredNameInput, enteredAgeInput);

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserName = enteredNameInput.current.value;
    const enteredAge = enteredAgeInput.current.value;

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid input Can't Set Empty Input ",
      });

      return;
    }
    if (+enteredAge <= 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid input (> 0) ",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    enteredNameInput.current.value = "";
    enteredAgeInput.current.value = "";
  };

  const errorModalHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConform={errorModalHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input ref={enteredNameInput} id="username" typeof="text" />

          <label htmlFor="age">Age (Year)</label>
          <input ref={enteredAgeInput} id="age" typeof="number" />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
