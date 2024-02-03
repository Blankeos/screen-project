<script lang="ts">
  import logo from "./assets/images/logo-universal.png";
  import { Greet, VerifyAge } from "../wailsjs/go/main/App.js";

  let resultText: string = "Please enter your name below 👇";
  let name: string;

  let ageVerificationResultText: string = "";
  let age: number;

  function greet(): void {
    Greet(name).then((result) => (resultText = result));
  }

  function verifyAge(): void {
    VerifyAge(age).then((result) => {
      ageVerificationResultText = result;
    });
  }
</script>

<main>
  <img alt="Wails logo" id="logo" src={logo} />
  <div class="result" id="result">{resultText}</div>
  <div class="input-box" id="input">
    <input
      autocomplete="off"
      bind:value={name}
      class="input"
      id="name"
      type="text"
    />
    <button class="btn" on:click={greet}>Greet</button>
    <br />
    <label for="age">Age:</label>
    <input autocomplete="off" bind:value={age} type="number" id="age" />
    <button class="btn" on:click={verifyAge}>Verify</button>
    <div>{ageVerificationResultText}</div>
  </div>
</main>

<style>
  #logo {
    display: block;
    width: 50%;
    height: 50%;
    margin: auto;
    padding: 10% 0 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-origin: content-box;
  }

  .result {
    height: 20px;
    line-height: 20px;
    margin: 1.5rem auto;
  }

  .input-box .btn {
    width: 60px;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    border: none;
    margin: 0 0 0 20px;
    padding: 0 8px;
    cursor: pointer;
  }

  .input-box .btn:hover {
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    color: #333333;
  }

  .input-box .input {
    border: none;
    border-radius: 3px;
    outline: none;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    background-color: rgba(240, 240, 240, 1);
    -webkit-font-smoothing: antialiased;
  }

  .input-box .input:hover {
    border: none;
    background-color: rgba(255, 255, 255, 1);
  }

  .input-box .input:focus {
    border: none;
    background-color: rgba(255, 255, 255, 1);
  }
</style>
