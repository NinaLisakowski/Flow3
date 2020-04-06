import React from "react";
import "./App.css";
import person, { males, females } from "./file2";

//2, 3, 4
const { firstName, email } = person;

//5
const combined = [...males, ...females];

//6
const extracombined = [...males, firstName, "Helle", ...females, "Tina"];

function App() {
  console.log("person: ", person);
  console.log("combined: ", combined);
  console.log("extracombined: ", extracombined);
  return (
    <p>
      {firstName}, {email}
    </p>
  );
}

export default App;
