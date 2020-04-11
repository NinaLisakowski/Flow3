import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const info = [
	{
		id: "rendering",
		title: "Rendering with React",
		info: "Add some text here",
	},
	{ id: "components", title: "components", info: "Add some text here" },
	{ id: "props-v-state", title: "Props v. State", info: "Add some text here" },
	{ id: "OMG", title: "omg", info: "o m g" },
	{ id: "wow", title: "cool link", info: "Some text" },
];

ReactDOM.render(
	<React.StrictMode>
		<App info={info} />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
