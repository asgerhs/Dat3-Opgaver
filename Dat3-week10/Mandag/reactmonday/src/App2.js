import React from "react";
import "./App.css";
import p, { males, females } from "./file2";

const person = p;
const { firstName, email } = person;
const all = [...males, ...females];
console.log(all);
const newAll = [...males, firstName, "Helle", ...females, "Tina"];
console.log(newAll);


const personV2 = { ...person, friends: all, phone: 123456 };
console.log(personV2);

function App() {
  return (
    <div className="App2">
      <p>
        {firstName}, {email}
      </p>

    </div>
  );
}

export default App;
