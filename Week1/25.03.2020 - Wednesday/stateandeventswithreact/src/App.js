import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* 1.1c */}
      <Count start="8" />
      <br />
      <Clock />
      <br />
      <ChuckNorrisJokeAndDadJokes />
      <br />
    </div>
  );
}

function Count(props) {
  const [count, setCount] = useState(+props.start);

  useEffect(() => {
    localStorage.setItem("count", count);
    localStorage.getItem("count");
  });

  console.log(count);
  return (
    <div>
      <p>You clicked {count} times</p>
      {/* 1.a */}
      <button onClick={() => setCount(count + 1)}>Click me +</button>
      {/* 1.b */}
      <button onClick={() => setCount(count - 1)}>Click me -</button>
      {/* 1.2c */}
      <button onClick={() => setCount(+count + +props.start)}>
        Click me +8
      </button>
      <button onClick={() => setCount(count - 8)}>Click me -8</button>
    </div>
  );
}

//2
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

//3 + 3.b
function ChuckNorrisJokeAndDadJokes() {
  const [data, setData] = useState([]);
  const [dJoke, setDJoke] = useState([]);

  //3
  const handleClick = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(jokes => {
        setData(jokes);
      });
  };

  //3.a DadJoke
  useEffect(() => {
    const interval = setInterval(() => {
      setDJoke(
        fetch("https://icanhazdadjoke.com/", {
          headers: new Headers({
            Accept: "application/json"
          })
        })
          .then(res => res.json())
          .then(joke => {
            setDJoke(joke);
          })
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{data.value}</p>
      <button onClick={handleClick}>
        Get ChuckNorris / Under 17 requires accompanying parent or adult
        guardian ;-)
      </button>
      <h2>New Dad joke every 10 seconds: {dJoke.joke}</h2>
    </div>
  );
}

export default App;
