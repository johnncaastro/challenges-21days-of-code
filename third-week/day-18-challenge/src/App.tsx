import { FormEvent, useState } from 'react';

import './styles/home.scss';

export function App() {
  const [newPassword, setNewPassword] = useState("");

  function handleGeneratePassword(e: FormEvent) {
    e.preventDefault();

    setNewPassword("");

    let password = "";

    do {
      password += Math.random().toString(36).substr(2)
    } while(password.length < 10)

    password = password.substr(0, 10);

    setNewPassword(password);
  }

  return (
    <div className="main-container">
      <form onSubmit={handleGeneratePassword}>
        <h1>Gerador de senha aleatória</h1>

        <input type="text" value={newPassword} disabled />

        <button type="submit">
          Gerar senha
        </button>
      </form>
    </div>
  )
}
