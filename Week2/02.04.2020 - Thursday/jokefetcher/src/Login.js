import React, { useState, useEffect } from "react";
import facade from "./apiFacade";

export function LogInOut({ isLoggedIn, loginMsg, setLoginStatus }) {
	const logout = () => {
		facade.logout();
		setLoginStatus(false);
	};
	const login = (user, pass) => {
		facade.login(user, pass).then((res) => setLoginStatus(true));
	};
	return (
		<div>
			{!isLoggedIn ? (
				<LogIn login={login} loginMsg={loginMsg} />
			) : (
				<LoggedIn logout={logout} loginMsg={loginMsg} />
			)}
		</div>
	);
}
function LogIn({ login, loginMsg }) {
	const init = { username: "", password: "" };
	const [loginCredentials, setLoginCredentials] = useState(init);
	const performLogin = (evt) => {
		evt.preventDefault();
		login(loginCredentials.username, loginCredentials.password);
	};
	const onChange = (evt) => {
		setLoginCredentials({
			...loginCredentials,
			[evt.target.id]: evt.target.value,
		});
	};
	return (
		<div>
			<h2>{loginMsg}</h2>
			<form onChange={onChange}>
				<input placeholder="User Name" id="username" /> <br />
				<input type="password" placeholder="Password" id="password" /> <br />
				<button onClick={performLogin} style={{ width: 161 }}>
					Login
				</button>
			</form>
		</div>
	);
}
function LoggedIn({ loginMsg, logout }) {
	const [dataFromServer, setDataFromServer] = useState("Loading...");
	useEffect(() => {
		facade.fetchData().then((data) => setDataFromServer(data.msg));
	}, []);
	return (
		<div>
			<h2>Logout here:</h2>
			<h3>{dataFromServer}</h3>
			<button onClick={logout}>{loginMsg}</button>
		</div>
	);
}
