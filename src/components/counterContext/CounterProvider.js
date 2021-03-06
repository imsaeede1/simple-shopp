import React, { useReducer } from "react";
import { useContext } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CounterContext.Provider value={count}>
        <CounterContextDispatcher.Provider value={dispatch}>
          {children}
        </CounterContextDispatcher.Provider>
      </CounterContext.Provider>
    </div>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => {
  return useContext(CounterContextDispatcher);

  // const addOne = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // const addFive = () => {
  //   setCount((prevCount) => prevCount + 5);
  // };

  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  // return { addOne, addFive, decrement };
};
