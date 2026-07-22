import React from "react";
import ReactDOM from "react-dom/client";

const ele = <h1>Hello, it's a day four</h1>;

function Greet(props) {
  return (
    <h1>
      hello, {props.name} {props.age}
    </h1>
  );
}

const element1 = <Greet name="jiya ganguli" age="30" />;

const Root = ReactDOM.createRoot(document.getElementById("root"));

// Root.render(greet(["ram", "bharat", "lakshman", "shatrughan"]));
Root.render(element1);
