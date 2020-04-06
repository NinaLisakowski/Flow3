import React, { useState } from "react";
import "./App.css";
import uuid from "uuid/v1";
import NewName from "./NewNames";
import NamesList from "./NamesList";

function App() {
  const initialData = [
    { id: uuid(), name: "Allan" },
    { id: uuid(), name: "Andreas" },
    { id: uuid(), name: "Tobias" }
  ];

  const [names, setNames] = useState(initialData);
  const [newName, setNewName] = useState({ id: "", name: "" });
  console.log(names);

  const addName = name => {
    if (name.id === "") {
      // id=-1 Indicates a new object
      name.id = uuid();
      names.push(name);
    }
    setNames([...names]);
    setNewName({ id: "", name });
  };

  return (
    <div className="App">
      <h1>Lifting state up 2</h1>
      <h3>Total Persons: {names.length}</h3>
      <NamesList names={names} />
      <br />
      <NewName addName={addName} nextName={newName} />
    </div>
  );
}

export default App;
