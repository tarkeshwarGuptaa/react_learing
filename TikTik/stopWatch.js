import React, { useCallback, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const [active, setActive] = useState(false);

  const start = () => {
    if (intervalRef.current === null) {
      setActive(true);
      intervalRef.current = setInterval(() => {
        setTime((preVal) => preVal + 1);
      }, 1000);
    }
  };

  const stop = () => {
    if (intervalRef.current != null) {
      setActive(false);
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    if (time != 0 && !active) {
      setTime(0);
    }
    // clearInterval(intervalRef.current);
    // intervalRef.current = null;
  };

  return (
    <div id="stop-watch">
      <h1>Stopwatch's time: {time}</h1>
      <button onClick={start} className="btn" disabled={active}>
        start
      </button>
      <button onClick={stop} className="btn" disabled={!active}>
        stop
      </button>
      <button onClick={reset} className="btn" disabled={time==0 && !active}>
        reset
      </button>
    </div>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<StopWatch />);
