import './App.css';
import { useState } from 'react';

export default function App() {

    return (
        <div className="App">
            <CalculatorWidget />
        </div>
    );
}

const CalculatorWidget = () => {
    const [input, setInput] = useState("0");
  
    const handleButtonClick = (value) => {
      if (value === "=") {
        try {
          setInput(eval(input).toString());
        } catch (error) {
          setInput("Error");
        }
      } else if (value === "C") {
        setInput("0");
      } else {
        setInput((prevInput) => (prevInput === "0" ? value : prevInput + value));
      }
    };
  
    return (
      <div
        className="calculator-widget"
        role="dialog"
        aria-label="Calculator Widget"
      >
        <input
          type="text"
          value={input}
          aria-live="assertive"
          aria-atomic="true"
          readOnly
        />
        <div className="calculator-buttons">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={() => handleButtonClick("=")}>=</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
          <button onClick={() => handleButtonClick("C")}>C</button>
        </div>
      </div>
    );
  };
