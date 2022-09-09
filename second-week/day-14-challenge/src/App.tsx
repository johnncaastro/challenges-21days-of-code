import { FormEvent, useState } from "react";
import { Header } from "./components/Header";

import './styles/home.scss';

export function App() {
  const [inputAnswer1Question1, setInputAnswer1Question1] = useState(false);
  const [inputAnswer2Question1, setInputAnswer2Question1] = useState(false);
  const [inputAnswer3Question1, setInputAnswer3Question1] = useState(false);
  const [inputAnswer1Question2, setInputAnswer1Question2] = useState(false);
  const [inputAnswer2Question2, setInputAnswer2Question2] = useState(false);
  const [inputAnswer3Question2, setInputAnswer3Question2] = useState(false);
  const [isFormFinished, setIsFormFinished] = useState(false);
  
  function handleSendAnswers(event: FormEvent) {
    event.preventDefault();

    setIsFormFinished(true);
  }

  return (
    <>
      <Header />

      {isFormFinished ? (
        <form onSubmit={handleSendAnswers}>
          <div>
            <h2>
              1. Qual a diferença entre = , == e === ?
            </h2>

            <label
              htmlFor="question1-answer-1"
              className={inputAnswer1Question1 ? "unchecked" : ""}
            >
              <input
                type="radio"
                id="question1-answer-1"
                name="question1"
                onChange={event => setInputAnswer1Question1(Boolean(event.target.value))}
              />
              O = significa atribuição de valor. Já == e === verificam a igualdade
              de valor e tipo de variável
            </label>

            <label
              htmlFor="question1-answer-2"
              className="checked"
            >
              <input
                type="radio"
                id="question1-answer-2"
                name="question1"
                onChange={event => setInputAnswer2Question1(Boolean(event.target.value))}
              />
              O = significa atribuição de valor. Já == verifica a igualdade 
              do valor, enquanto === verifica valor e tipo de variável.
            </label>

            <label
              htmlFor="question1-answer-3"
              className={inputAnswer3Question1 ? "unchecked" : ""}
            >
              <input
                type="radio"
                id="question1-answer-3"
                name="question1"
                onChange={event => setInputAnswer3Question1(Boolean(event.target.value))}
              />
              Os três sinais significam atribuição de valor.
            </label>
          </div>

          <div>
            <h2>
              2. O que “1” + 2 + 4 retorna?
            </h2>

            <label
              htmlFor="question2-answer-1"
              className="checked"
            >
              <input
                type="radio"
                id="question2-answer-1"
                name="question2"
                onChange={event => setInputAnswer1Question2(Boolean(event.target.value))}
              />
              Como 1 é uma string, tudo é uma string, então o resultado é 124.
            </label>

            <label
              htmlFor="question2-answer-2"
              className={inputAnswer2Question2 ? "unchecked" : ""}
            >
              <input
                type="radio"
                id="question2-answer-2"
                name="question2"
                onChange={event => setInputAnswer2Question2(Boolean(event.target.value))}
              />
              Como o número de variáveis do tipo number é maior, então o resultado
              é a soma dos números, que dá 7.
            </label>

            <label
              htmlFor="question2-answer-3"
              className={inputAnswer3Question2 ? "unchecked" : ""}
            >
              <input
                type="radio"
                id="question2-answer-3"
                name="question2"
                onChange={event => setInputAnswer3Question2(Boolean(event.target.value))}
              />
              Como as variáveis são de tipos diferentes, ocorrerá um erro.
            </label>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSendAnswers}>
          <div>
            <h2>
              1. Qual a diferença entre = , == e === ?
            </h2>

            <label htmlFor="question1-answer-1">
              <input
                type="radio"
                id="question1-answer-1"
                name="question1"
                onChange={event => setInputAnswer1Question1(Boolean(event.target.value))}
              />
              O = significa atribuição de valor. Já == e === verificam a igualdade
              de valor e tipo de variável
            </label>

            <label
              htmlFor="question1-answer-2"
            >
              <input
                type="radio"
                id="question1-answer-2"
                name="question1"
                onChange={event => setInputAnswer2Question1(Boolean(event.target.value))}
              />
              O = significa atribuição de valor. Já == verifica a igualdade 
              do valor, enquanto === verifica valor e tipo de variável.
            </label>

            <label htmlFor="question1-answer-3">
              <input
                type="radio"
                id="question1-answer-3"
                name="question1"
                onChange={event => setInputAnswer3Question1(Boolean(event.target.value))}
              />
              Os três sinais significam atribuição de valor.
            </label>
          </div>

          <div>
            <h2>
              2. O que “1” + 2 + 4 retorna?
            </h2>

            <label
              htmlFor="question2-answer-1"
            >
              <input
                type="radio"
                id="question2-answer-1"
                name="question2"
                onChange={event => setInputAnswer1Question2(Boolean(event.target.value))}
              />
              Como 1 é uma string, tudo é uma string, então o resultado é 124.
            </label>

            <label htmlFor="question2-answer-2">
              <input
                type="radio"
                id="question2-answer-2"
                name="question2"
                onChange={event => setInputAnswer2Question2(Boolean(event.target.value))}
              />
              Como o número de variáveis do tipo number é maior, então o resultado
              é a soma dos números, que dá 7.
            </label>

            <label htmlFor="question2-answer-3">
              <input
                type="radio"
                id="question2-answer-3"
                name="question2"
                onChange={event => setInputAnswer3Question2(Boolean(event.target.value))}
              />
              Como as variáveis são de tipos diferentes, ocorrerá um erro.
            </label>
          </div>

          <button type="submit">
            Enviar respostas
          </button>
        </form>
      )}
    </>
  )
}
