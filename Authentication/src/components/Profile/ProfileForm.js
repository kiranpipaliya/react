import classes from './ProfileForm.module.css';
import { useContext } from 'react';
import AuthContext from '../Auth/store/auth-content';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const authCtx = useContext(AuthContext)
  const passwordRef = useRef();
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);
  const history = useHistory();
  const changePasswordHandler = (event) => {
    event.preventDefault();
    const enteredPassword = passwordRef.current.value;


    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDKsSxdMDUR1gLZldW1W9_4DyrfxMEQXX0", {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredPassword,
        returnSecureToken: false,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        setPasswordChangeSuccess(true)
        history.replace("/")
      } else {
        setPasswordChangeSuccess(false)
      }
    })
  }

  return (<>{
    !passwordChangeSuccess &&
    <form onSubmit={changePasswordHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength={"7"} ref={passwordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>

  }
    {passwordChangeSuccess && <p>Password Change Success</p>} </>);
}

export default ProfileForm;
