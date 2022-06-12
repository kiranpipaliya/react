

import useInput2 from "../hooks/use-input-p";

const BasicForm = (props) => {
  const { value: fNameEnteredValue, isValid: fNameIsValid, hasError: fNameInputHasError, valueChangeHandler: fNameChangeHandler, inputBluerHandler: fNameBluerHandler, reset: fNameReset } = useInput2(value => value.trim() !== "")
  const { value: lNameEnteredValue, isValid: lNameIsValid, hasError: lNameInputHasError, valueChangeHandler: lNameChangeHandler, inputBluerHandler: lNameBluerHandler, reset: lNameReset } = useInput2(value => value.trim() !== "")
  const { value: emailEnteredValue, isValid: emailIsValid, hasError: emailInputHasError, valueChangeHandler: emailChangeHandler, inputBluerHandler: emailBluerHandler, reset: emailReset } = useInput2(value => value.trim() !== "")

  let formIsValid = false;
  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!fNameIsValid) {
      return
    }

    const userData = {
      "FirstName": fNameEnteredValue,
      "LastName": lNameEnteredValue,
      "Email": emailEnteredValue
    }
    console.table(userData);
    fNameReset();
    lNameReset();
    emailReset();
  }


  return (
    <form onSubmit={formSubmitHandler} >
      <div className='control-group'>
        <div className={`form-control ${fNameInputHasError ? "invalid" : ""} `}>
          <label htmlFor='First'>First Name</label>
          <input value={fNameEnteredValue} onBlur={fNameBluerHandler} onChange={fNameChangeHandler} type='text' id='First' />
          {fNameInputHasError && <p className="error-text">First Name Must be Not Empty</p>}
        </div>
        <div className={`form-control ${lNameInputHasError ? "invalid" : ""} `}>
          <label htmlFor='last'>Last Name</label>
          <input value={lNameEnteredValue} onBlur={lNameBluerHandler} onChange={lNameChangeHandler} type='text' id='last' />
          {lNameInputHasError && <p className="error-text">Last Name Must be Not Empty</p>}
        </div>
      </div>
      <div className={`form-control ${emailInputHasError ? "invalid" : ""} `}>
        <label htmlFor='email'>E-Mail Address</label>
        <input value={emailEnteredValue} onBlur={emailBluerHandler} onChange={emailChangeHandler} type='text' id='email' />
        {emailInputHasError && <p className="error-text">InValid Email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
