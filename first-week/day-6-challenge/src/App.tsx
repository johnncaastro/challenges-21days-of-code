import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

import './styles/global.scss';
import './styles/home.scss';

export function App() {
  return (
    <main className='container'>
      <div className='card'>
        <img
          src="https://avatars.githubusercontent.com/u/62813335?v=4"
          alt="Foto do perfil do GitHub"
        />

        <h1>Jonathan Castro Alves</h1>

        <ul>
          <a 
            href="https://github.com/johnncaastro"
            target="blank"
          >
            <SiGithub color='#fff' />
          </a>
          <a
            href="https://www.instagram.com/johnncaastro/"
            target="blank"
          >
            <SiInstagram color='#fff' />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-castro-alves/"
            target="blank"
          >
            <SiLinkedin color='#fff' />
          </a>
        </ul>
      </div>
    </main>
  )
}
