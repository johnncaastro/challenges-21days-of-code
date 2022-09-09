import { projects } from './services/projects.js';

import { GoLocation, GoMarkGithub } from 'react-icons/go';
import { FiLinkedin } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { MdOutlineLocalPostOffice, MdContentPaste } from 'react-icons/md';

import './styles/home.scss';

export function App() {
  return (
    <div className='main-container'>
      <aside>
        <div className='profile-container'>
          <img src="https://github.com/johnncaastro.png" alt="Foto de perfil" />

          <h2>Jonathan Castro Alves</h2>

          <p>Desenvolvedor Front-end</p>

          <span>
            Atualmente trabalhando como técnico em Eletrônica em uma
            distribuidora de materiais de segurança eletrônica. <br />
            Em processo de migração de carreira para área de desenvolvimento web
          </span>
        </div>
        <div className='personal-information-container'>
          <ul>
            <a href="#">
              <GoLocation />
              <span>Brasil</span>
            </a>
            <a href="https://github.com/johnncaastro" target="_blank">
              <GoMarkGithub />
              <span>johnncaastro</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-castro-alves/"
              target="_blank"
            >
              <FiLinkedin />
              <span>jonathan-castro-alves</span>
            </a>
            <a href="https://www.instagram.com/johnncaastro/" target="_blank">
              <BsInstagram />
              <span>johnncaastro</span>
            </a>
            <a href="#">
              <MdOutlineLocalPostOffice />
              <span>jonathan.calves74@gmail.com</span>
            </a>
          </ul>
        </div>
        <div className='technologies-container'>
          <h2>Tecnologias</h2>

          <div className='technologies-content'>
            <div>html</div>
            <div>css</div>
            <div>javascript</div>
            <div>reactjs</div>
            <div>nextjs</div>
            <div>git</div>
            <div>github</div>
            <div>react native</div>
            <div>typescript</div>
          </div>
        </div>
      </aside>

      <main>
        <div className='projects-container'>Meus projetos</div>

        <div className='projects-content'>
          {projects.map(project => (
            <a href='#' className='card'>
              <header>
                <MdContentPaste />

                <p>{project.name}</p>
              </header>

              <span>{project.description}</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
