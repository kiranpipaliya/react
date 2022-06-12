import { useState } from "react";
const useInput2 = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouch, setIsTouch] = useState(false)

    const isValid = validateValue(enteredValue);
    const hasError = !isValid && isTouch;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    }

    const inputBluerHandler = (e) => {
        setIsTouch(true)
    }
    const reset = () => {
        setEnteredValue("")
        setIsTouch(false)
    }

    return {
        value: enteredValue, isValid: isValid, hasError, valueChangeHandler, inputBluerHandler, reset
    }

}
export default useInput2;