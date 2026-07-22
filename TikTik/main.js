import React, { useCallback, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  const [fibbo, setFibbo] = useState("");

  const fibbonacci = useCallback((n) => {
    if (n <= 1) {
      return n;
    }

    return fibbonacci(n - 1) + fibbonacci(n - 2);
  }, []);

  const result = useMemo(() => {
    return fibbonacci(fibbo);
  }, [fibbo]);

  return (
    <>
      <h1>Count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <div>
        <h1>Fibbonacci is: {result}</h1>
        <input
          type="text"
          value={fibbo}
          onChange={(e) => setFibbo(e.target.value)}
        ></input>
      </div>
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
