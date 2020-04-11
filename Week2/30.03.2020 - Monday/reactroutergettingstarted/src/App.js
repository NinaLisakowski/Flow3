import React, { useEffect, useState } from "react";
import {
	HashRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from "react-router-dom";
import "./style2.css";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
	return (
		<Router>
			<div>
				<Header />

				<hr />

				{/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/dashboard">
							<Dashboard />
						</Route>
						<Route exact path="/clock">
							<Clock />
						</Route>
						<Route exact path="/jokes">
							<ChuckNorrisJokeAndDadJokes />
						</Route>
						<Route exact path="/tensec">
							<TenSec />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

// You can think of these components as "pages"
// in your app.

function Home() {
	return (
		<div>
			<h2>Home</h2>
			<h4>Home</h4>
		</div>
	);
}

function About() {
	return (
		<div>
			<h2>About</h2>
		</div>
	);
}

function Dashboard() {
	return (
		<div>
			<h2>Dashboard</h2>
		</div>
	);
}

function Header() {
	return (
		<ul className="header">
			<li>
				<NavLink exact activeClassName="selected" to="/">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink exact activeClassName="selected" to="/about">
					About
				</NavLink>
			</li>
			<li>
				<NavLink exact activeClassName="selected" to="/dashboard">
					Dashboard
				</NavLink>
			</li>
			<li>
				<NavLink exact activeClassName="selected" to="/clock">
					Clock
				</NavLink>
			</li>
			<li>
				<NavLink exact activeClassName="selected" to="/jokes">
					Jokes
				</NavLink>
			</li>
			<li>
				<NavLink exact activeClassName="selected" to="/tensec">
					10 seconds
				</NavLink>
			</li>
		</ul>
	);
}

function Clock() {
	var [time, setTime] = useState(new Date().toLocaleTimeString());
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return <h1>The time is: {time}</h1>;
}

function ChuckNorrisJokeAndDadJokes() {
	const [data, setData] = useState([]);

	//3
	const handleClick = () => {
		fetch("https://api.chucknorris.io/jokes/random")
			.then((res) => res.json())
			.then((jokes) => {
				setData(jokes);
			});
	};

	return (
		<div>
			<p>{data.value}</p>
			<button onClick={handleClick}>
				Get ChuckNorris / Under 17 requires accompanying parent or adult
				guardian ;-)
			</button>
		</div>
	);
}

function TenSec() {
	const [dJoke, setDJoke] = useState([]);

	//3.a DadJoke
	useEffect(() => {
		const interval = setInterval(() => {
			setDJoke(
				fetch("https://icanhazdadjoke.com/", {
					headers: new Headers({
						Accept: "application/json",
					}),
				})
					.then((res) => res.json())
					.then((joke) => {
						setDJoke(joke);
					})
			);
		}, 10000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div>
			<h2>New Dad joke every 10 seconds:</h2>
			<p>{dJoke.joke}</p>
		</div>
	);
}
