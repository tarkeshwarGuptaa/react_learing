import React, { useCallback, useMemo, useState, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  const money = useRef(0)

  return (
    <>
      <h1>Count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Money is: {money.current}</h1>
      <button
        onClick={() => {
          money.current = money.current + 1;
          console.log(money.current);
        }}
      >
        Increment
      </button>
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
