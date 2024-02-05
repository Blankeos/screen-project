import { createRenderEffect, createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Greet } from "wailsjs/go/main/App";

function App() {
  const [count, setCount] = createSignal(0);

  const [name, setName] = createSignal("");
  const [greetResult, setGreetResult] = createSignal("");

  function greet() {
    Greet(name()).then((result) => setGreetResult(result));
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <input
        name="name"
        id="name"
        placeholder="Name"
        onInput={(e) => setName(e.target.value)}
      />
      <button onClick={greet}>Greet</button>
      <br />
      {greetResult()}
      <hr />
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  );
}

export default App;
