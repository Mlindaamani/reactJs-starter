import { useEffect, useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(() => {
    return JSON.parse(localStorage.getItem("COUNTER")) || 0;
  });

  function increment() {
    const localCounter = parseInt(localStorage.getItem("COUNTER"));
    setCounter(localCounter + 1);
  }

  function decrement() {
    const localCounter = parseInt(localStorage.getItem("COUNTER"));
    setCounter(localCounter - 1);
  }

  useEffect(() => {
    localStorage.setItem("COUNTER", JSON.stringify(counter));
  }, [counter]);

  return (
    <>
      <h3 className="mt-5 text-warning mb-5 text-center">
        COUNTER APP _USERSTATE && LOCALSTORAGE
      </h3>

      <div className="container d-flex justify-content-evenly align-items-center w-50 mt-5 bg-black p-5 rounded-5 bg-opacity-50">
        <button
          className="btn btn-secondary fw-bold fs-3 w-25 p-3 text-bg-danger"
          onClick={decrement}
        >
          -
        </button>

        <button className="btn btn-primary w-25 p-3 fw-bold fs-3 rounded-5 text-bg-light" >
          {counter}
        </button>

        <button
          className="btn btn-success w-25 p-3 fw-bold fs-3 "
          onClick={increment}
        >
          +
        </button>
      </div>
    </>
  );
};

