import { useState } from 'react';

import './styles/home.scss';

export function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [customInterval, setCustomInterval] = useState(0);

  function handleStartTimer() {
    setCustomInterval(
      setInterval(() => {
        handleChangeTimer()
      }, 1000)
    )
  }

  function handleStopTimer() {
    if(customInterval) clearInterval(customInterval);
  }

  function handleClearTimer() {
    handleStopTimer();
    setSeconds(0);
    setMinutes(0);
  }

  function handleChangeTimer() {
    setSeconds((prevState: number) => {
      if(prevState + 1 === 60) {
        setMinutes(minutes + 1);
        return 0;
      }
      return prevState + 1;
    })
  }

  return (
    <main>
      <div className="counter-container">
        <strong>
          {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </strong>

        <div className="controls-counter">
          <button onClick={handleClearTimer}>Zerar</button>
          <button onClick={handleStopTimer}>Pausar</button>
          <button onClick={handleStartTimer}>Iniciar</button>
        </div>
      </div>
    </main>
  )
}
