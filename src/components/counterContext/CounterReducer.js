import { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "add":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "add2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "add2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterReduc = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count is : {count.firstCounter}</h2>
      <h2>Count2 is : {count.secondCounter}</h2>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        add One
      </button>
      <button onClick={() => dispatch({ type: "add", value: 5 })}>
        add Five
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "add2", value: 1 })}>
        add2 One
      </button>
      <button onClick={() => dispatch({ type: "add2", value: 5 })}>
        add2 Five
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterReduc;
