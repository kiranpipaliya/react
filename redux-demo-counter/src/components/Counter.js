import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../stor/counter';


const Counter = () => {
  console.log(counterActions);
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCashe);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {

    dispatch(counterActions.increment());
  }
  const increseHandler = () => {
    dispatch(counterActions.incises(5))
  }
  const decrementHandler = () => {
    if (counter > 0) {
      dispatch(counterActions.decrement())
    }
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
