import reactLogo from "./assets/react.svg";
import uilibLogo from "./assets/ss-logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <a
          href="https://65f3a47f74b26f62ee351a48-fpdtdrvjcs.chromatic.com/?path=/docs/introduction-welcome--docs"
          target="_blank"
        >
          <img src={uilibLogo} className="logo" alt="SS UI Library" />
        </a>
      </div>
      <h1>React + SS UI</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the React and SS logos to learn more
      </p>
    </>
  );
}

export default App;
