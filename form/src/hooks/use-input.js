import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouch, setIsTouch] = useState(false)

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouch;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    const inputBluerHandler = (e) => {
        setIsTouch(true)
    }
    const reset = () => {
        setEnteredValue("")
        isTouch(false)
    }
    return {
        value: enteredValue, isValid: valueIsValid, hasError, valueChangeHandler, inputBluerHandler, reset
    }

}
export default useInput;