import { useState } from "react";

import './styles.scss';

export function Home() {
  const [num, setNum] = useState(0);
  const [prevNum, setPrevNum] = useState(0);
  const [operator, setOperator] = useState("");

  function handleInputNum(e: any) {
    const valueInput = e.target.value;

    if(num === 0) {
      setNum(valueInput);
    } else {
      setNum(num + valueInput);
    }
    console.log(num)
  }

  function handleClearInput() {
    setNum(0);
  }

  function handleOperator(e: any) {
    setOperator(e.target.value);
    setPrevNum(Number(num));
    setNum(0);
  }

  function calculate() {
    if(operator === "+") {
      setNum(prevNum + Number(num));
    } else if(operator === "-") {
      setNum(prevNum - Number(num));
    } else if(operator === "*") {
      setNum(prevNum * Number(num));
    } else {
      setNum(prevNum / Number(num));
    }

    setPrevNum(0);
    setOperator("");
  }

  return (
    <div className="container">
      <div className="calculator-container">
        <input
          type="text"
          value={num}
          disabled
        />

        <div className="keyboard-container">
          <button type="button" onClick={handleClearInput}>AC</button><br />
          <button type="button" onClick={handleInputNum} value={7}>7</button>
          <button type="button" onClick={handleInputNum} value={8}>8</button>
          <button type="button" onClick={handleInputNum} value={9}>9</button>
          <button type="button" onClick={handleOperator} value="/">/</button>
          <button type="button" onClick={handleInputNum} value={4}>4</button>
          <button type="button" onClick={handleInputNum} value={5}>5</button>
          <button type="button" onClick={handleInputNum} value={6}>6</button>
          <button type="button" onClick={handleOperator} value="*">*</button>
          <button type="button" onClick={handleInputNum} value={1}>1</button>
          <button type="button" onClick={handleInputNum} value={2}>2</button>
          <button type="button" onClick={handleInputNum} value={3}>3</button>
          <button type="button" onClick={handleOperator} value="-">-</button>
          <button type="button" onClick={handleInputNum} value={0}>0</button>
          <button type="button" onClick={handleInputNum} value=".">.</button>
          <button type="button" onClick={handleOperator} value="+">+</button>
          <button type="button" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}