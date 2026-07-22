import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);

  const passwordGen = useCallback(() => {
    let domain = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) {
      domain += "0123456789";
    }
    if (character) {
      domain += "~`!@#$%^&*()-_+][}{?.,><";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      password += domain[Math.floor(Math.random() * domain.length)];
    }

    setPassword(password);
  }, [length, number, character]);


  useEffect(() => {
    passwordGen();
  }, [passwordGen]);

  return (
    <>
      <h1>{password} </h1>
      <hr></hr>
      <div id="input-box">
        <label>Lenght ({length})</label> &nbsp;
        <input
          type="range"
          min={5}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          step={1}
        ></input>
        <br></br>
        <label>is Number include?</label>&nbsp;
        <input
          type="checkbox"
          defaultChecked={number}
          onChange={() => setNumber(!number)}
        ></input>
        <br></br>
        <label>is special character include?</label>&nbsp;
        <input
          type="checkbox"
          defaultChecked={character}
          onChange={() => setCharacter(!character)}
        ></input>
      </div>
    </>
  );
}

const root = document.getElementById("root");
const Root = ReactDOM.createRoot(root);
Root.render(<PasswordGenerator />);
