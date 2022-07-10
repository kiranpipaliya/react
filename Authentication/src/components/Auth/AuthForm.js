import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';
import { useContext } from 'react';
import AuthContext from './store/auth-content';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext)
  const history = useHistory();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    setIsLoading(true)
    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDKsSxdMDUR1gLZldW1W9_4DyrfxMEQXX0`
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDKsSxdMDUR1gLZldW1W9_4DyrfxMEQXX0`

    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
        headers: {
          "Content-Type": "application/json"
        }
      })
    }).then(res => {
      setIsLoading(false)
      if (res.ok) {
        return res.json().then(data => {
          const time = new Date(new Date().getTime() + (+data.expiresIn * 1000))
          authCtx.login(data.idToken, time);
          history.replace("/")
        })
      } else {
        return res.json().then(data => {
          // let errorMessage = "Authentication Failed!";
          // // if (data && data.error && data.error.message) {
          // //   errorMessage = data.error.message;
          // // }   
          throw new Error(data.error.message);

        })
      }
    }).catch(err => {
      alert(err.message);
    })

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordRef} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending Request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
