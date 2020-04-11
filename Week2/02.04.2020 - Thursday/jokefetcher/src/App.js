import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Jokes } from "./Jokes";
import { Scrape } from "./Scrape";
import { LogInOut } from "./Login";

export default App;

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const setLoginStatus = (status) => {
		setIsLoggedIn(status);
	};

	return (
		<Router>
			<div>
				<Header
					loginMsg={isLoggedIn ? "Logout" : "Login"}
					isLoggedIn={isLoggedIn}
				/>
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/jokes">
							<Jokes />
						</Route>
						<Route path="/scrape">
							<Scrape />
						</Route>
						<Route path="/login-out">
							<LogInOut
								loginMsg={isLoggedIn ? "Logout" : "Login"}
								isLoggedIn={isLoggedIn}
								setLoginStatus={setLoginStatus}
							/>
						</Route>
						<Route>
							<NoMatch />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

function Home() {
	return (
		<div>
			<h1>Home</h1>
			<p>Home</p>
		</div>
	);
}

function NoMatch() {
	return (
		<div>
			<h2>No match found</h2>
		</div>
	);
}
