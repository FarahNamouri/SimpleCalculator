import "./App.css";
import { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const multiply = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resretInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resretResult = (e) => {
    e.preventDefault();
    setResult((previousValue) => previousValue * 0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simple Calculator App</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          ref={inputRef}
          placeholder="type a number please"
          type="text"
          name="calculator"
        />

        <button onClick={plus}>add</button>
        <button onClick={minus}>substarct</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resretInput} className="red-button">
          reset input
        </button>
        <button onClick={resretResult} className="red-button">
          reset result
        </button>
      </form>
    </div>
  );
}

export default App;
