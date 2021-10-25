import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "add2":
      return state + action.value;
    case "add2":
      return state + action.value;
    case "decrement2":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterReduc = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count is : {count}</h2>

      <div>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          add One
        </button>
        <button onClick={() => dispatch({ type: "add", value: 5 })}>
          add Five
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
      <div>
        <h2>Count2 is : {countTwo}</h2>
        <button onClick={() => dispatchTwo({ type: "add2", value: 1 })}>
          add2 One
        </button>
        <button onClick={() => dispatchTwo({ type: "add2", value: 5 })}>
          add2 Five
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement2", value: 1 })}>
          Decrement2
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>resetTwo</button>
      </div>
    </div>
  );
};

export default CounterReduc;
