import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Authenticate from "../context/auth-context";
import Input from "../UI/Input";

const emailReducer = (state, action) => {
  console.log(state, action);

  if (action.type === "USET_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUER") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "INPUT_BLUER") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const authCtx = useContext(Authenticate);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  console.log(emailState.isValid);

  // useEffect(() => {
  //   console.log("EFFECT RUNNING");w

  //   return () => {
  //     console.log("EFFECT CLEANUP");
  //   };
  // }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const emailInput = useRef();
  const passwordInput = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USET_INPUT", val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUER" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUER" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInput.current.focus();
    } else {
      passwordInput.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInput}
          type="email"
          label="E-Mail"
          id="email"
          value={emailState.value}
          isValid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInput}
          type="password"
          label="Password"
          id="password"
          value={passwordState.value}
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
