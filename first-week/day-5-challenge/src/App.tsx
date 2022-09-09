import { Header } from './components/Header';

import illustrationImg from './assets/illustration.png';

import './styles/global.scss';

import './styles/home.scss';

export function App() {
  return (
    <>
      <Header />

      <main className='main-container'>
        <img src={illustrationImg} alt="Ilustração de personagem Pixar" />

        <div>
          <strong>Awww...Don't Cry.</strong>
          <span>It's just a 404 Error!</span>
          <p>
            What you're looking for may have been misplaced <br /> in Long Term Memory
          </p>
        </div>
      </main>
    </>
  )
}
