import { useCount, useCountAction } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const dispatch = useCountAction();
  return (
    <div>
      <p>count is : {count}</p>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        add One
      </button>
      <button onClick={() => dispatch({ type: "add", value: 5 })}>
        add Five
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Dec
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterOne;
