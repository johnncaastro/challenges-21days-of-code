import { useEffect, useState } from 'react';

import './styles/home.scss';

export function App() {
  const [keyboardEvent, setKeyboardEvent] = useState<string[]>([]);

  useEffect(() => {
    document.addEventListener("keypress", function addKey(e) {
      setKeyboardEvent([...keyboardEvent, e.key]);
    })
  }, [keyboardEvent])

  return (
    <div className="main-container">
      <section>
        <h1>Digite no teclado para mostrarmos a tecla pressionada:</h1>

        {keyboardEvent.map(key => (
          <div key={Math.random()} className="keyboard-event-container">
            {key}
          </div>
        ))}
      </section>
    </div>
  )
}
