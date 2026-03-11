import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import "./components/Counter.css";

function App() {
  return (
    <div>
      {" "}
      <h1>Welcome</h1> <Counter />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
