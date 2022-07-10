import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner"
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering, setIsEntering] = useState(false)

  let enteredAuthor;
  let enteredText;

  function submitFormHandler(event) {
    event.preventDefault();

    enteredAuthor = authorInputRef.current.value;
    enteredText = textInputRef.current.value;
    // optional: Could validate here
    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const submiting = () => {
    setIsEntering(false)
  }
  const formFocuseHandler = () => {
    enteredAuthor = authorInputRef.current.value;
    enteredText = textInputRef.current.value;

    if (enteredText.trim().length === 0 || enteredText.trim().length === 0) {
      setIsEntering(true)
    }
  }
  const leaveMessage = (location) => {
    console.log(location)
    return "Your Entered Data Will Be Lost"
  }
  return (
    <Fragment>
      <Prompt when={isEntering} message={leaveMessage} />
      <Card>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              {<LoadingSpinner />}
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input onChange={formFocuseHandler} type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea onChange={formFocuseHandler} id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={submiting} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card></Fragment>
  );
};

export default QuoteForm;
