import React, { useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  STOP_COUNTING: "stop_counting",
};

const initialState = {
  count: 0,
  isCounting: false,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1, isCounting: true };

    case ACTION.DECREMENT:
      if (state.count <= 0) return { ...state, isCounting: false, count: 0 };
      return { ...state, count: state.count - 1 };

    case ACTION.STOP_COUNTING:
      return { ...state, isCounting: false, count: (state.count = 0) };

    default:
      return state;
  }
}

export const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleIncrement() {
    dispatch({ type: ACTION.INCREMENT });
  }

  function handleDecrement() {
    dispatch({ type: ACTION.DECREMENT });
  }

  return (
    <div
      className="container mt-5 p-5 bg-dark w-25 
    d-flex justify-content-center 
    align-items-center flex-column rounded-4 shadow"
    >
      <h1 className="fw-bold fs-4 mb-3 text-warning">Reducer Hook</h1>
      <p
        className={
          state.isCounting ? "fw-bold text-light" : "text-danger fw-bold"
        }
      >
        {state.isCounting ? "Counting..." : "Not Counting"}
      </p>
      <p className="fw-bold fs-2 text-warning">Count: {state.count}</p>
      <div className="btn-group bg-secondary mb-5 mt-3">
        <button
          className="btn border-0 text-bg-light"
          onClick={handleDecrement}
        >
          ➖
        </button>
        <button
          className="btn fw-bold border-0 text-bg-warning"
          onClick={handleIncrement}
        >
          ➕
        </button>

        <button
          className="btn border-0 text-bg-danger"
          onClick={() => dispatch({ type: ACTION.STOP_COUNTING })}
        >
          ⚠
        </button>
      </div>
    </div>
  );
};

