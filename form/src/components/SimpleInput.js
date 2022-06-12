import { useRef, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const { value: enteredName, isValid: nameIsValid, hasError: nameInputHasError, valueChangeHandler: nameChangeHandler, inputBluerHandler: nameBluerHandler, reset: nameInputReset } = useInput(value => value.trim() !== "");
  const { value: enteredEmail, isValid: emailIsValid, hasError: emailInputHasError, valueChangeHandler: emailChangeHandler, inputBluerHandler: emailBluerHandler, reset: emailInputReset } = useInput(value => value.includes("@"));

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid && !emailInputHasError) { return }
    nameInputReset()
    emailInputReset()

  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${nameInputHasError ? "invalid" : ""}`}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={nameBluerHandler} type='text' id='name' onChange={nameChangeHandler} value={enteredName} />
        {nameInputHasError && <p className="error-text">Name Must be Not Empty</p>}
      </div>

      <div className={`form-control ${emailInputHasError ? "invalid" : ""}`}>
        <label htmlFor='email'>Your Email</label>
        <input onBlur={emailBluerHandler} type='email' id='email' onChange={emailChangeHandler} value={enteredEmail} />
        {emailInputHasError && <p className="error-text">Please Enter Valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
