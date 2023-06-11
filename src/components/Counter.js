import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counterSelctor = useSelector((state) => state.counter);
  console.log(counterSelctor);
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  const incrementBy5 = () => {
    dispatch({ type: "incrementBy5" });
  };
  const decrementBy5 = () => {
    dispatch({ type: "decrementBy5" });
  };
  const increase=()=>{
    dispatch({ type: "increase" ,amount:2})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterSelctor}</div>
      <button onClick={incrementHandler}>INCREMENT</button>
      <button onClick={decrementHandler}>DECREMENT</button>
      <button onClick={incrementBy5}>incrementBy5</button>

      <button onClick={decrementBy5}>decrementBy5</button>
      <button onClick={increase}>increment by 2</button>


      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
