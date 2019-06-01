import React from "react";
import useStore from "./store";

export default function App() {
  const [state, dispatch] = useStore();

  const updateComment = () =>
    dispatch(prev => ({
      comment: `hello world! ${Math.random()}`;
    }));
  return (
    <>
      <div>{state.comment}</div>
      <button onClick={updateComment}>+</button>
    </>
  );
}
