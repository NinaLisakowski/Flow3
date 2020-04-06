import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { ReservationForm } from "./App";

ReactDOM.render(
  <React.StrictMode>
    FormDemo 1:
    <App />
    <br />
    Handling multiple inputs:
    <ReservationForm />
  </React.StrictMode>,
  document.getElementById("root")
);
