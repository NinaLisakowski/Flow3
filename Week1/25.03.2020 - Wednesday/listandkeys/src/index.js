import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ListDemoApp from "./ListDemoApp";
import ListDemoApp2 from "./ListDemoApp2";

let app = <App />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="listdemoapp">
        1 List and Keys
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="listdemoapp2">
        2 List and Keys
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app3">
        ex3
      </a>{" "}
      &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case "listdemoapp":
      app = <ListDemoApp />;
      break;
    case "listdemoapp2":
      app = <ListDemoApp2 />;
      break;
    // case "app3":
    //   app = <App3 />;
    //   break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
