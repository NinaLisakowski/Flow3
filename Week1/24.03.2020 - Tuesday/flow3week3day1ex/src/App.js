import React from "react";
import "./App.css";
import upper, { text1, text2, text3 } from "./file1";
import "./file2";

function App() {
  return (
    <div className="App">
      <h1>\('-')/</h1>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>
      <p>{upper("please uppercase me")}</p>
    </div>
  );
}

export default App;
