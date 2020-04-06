import React from "react";
import { names } from "./file2";

//3a, b
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

//3b
function WelcomePerson(props) {
  return (
    <h1>
      Hello, {props.person.firstName} {props.person.lastName}, email:{" "}
      {props.person.email}
    </h1>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <WelcomePerson person={names[0]} />
      <WelcomePerson person={names[1]} />
      <WelcomePerson person={names[2]} />
    </div>
  );
}

export default App;
