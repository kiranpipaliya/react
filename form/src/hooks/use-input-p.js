import { useReducer } from "react";

const initialState = {
    value: "",
    isTouch: false,
}

const inputReducer = (state, action) => {
    if (action.type === "INPUT") {
        return {
            value: action.value,
            isTouch: state.isTouch,
        }
    }
    if (action.type === "BLUER") {
        return {
            value: state.value,
            isTouch: true,
        }
    }
    if (action.type === "RESET") {
        return {
            value: "",
            isTouch: false,
        }
    }
    return initialState;
}
const useInput2 = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputReducer, initialState)

    const isValid = validateValue(inputState.value);
    const hasError = !isValid && inputState.isTouch;

    const valueChangeHandler = (e) => {
        dispatch({ type: "INPUT", value: e.target.value })
    }

    const inputBluerHandler = (e) => {
        dispatch({ type: "BLUER" })
    }
    const reset = () => {
        dispatch({ type: "RESET" })
    }

    return {
        value: inputState.value, isValid: isValid, hasError, valueChangeHandler, inputBluerHandler, reset
    }

}
export default useInput2;