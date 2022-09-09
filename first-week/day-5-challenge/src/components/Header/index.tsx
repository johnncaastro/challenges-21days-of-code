import logoImg from '../../assets/logo.png';

import './styles.scss';

export function Header() {
  return (
    <header className='header-container'>
      <a href="#"><img src={logoImg} alt="Logo da Pixar" /></a>

      <nav>
        <a href="#"><li>feature films</li></a>
        <a href="#"><li>short films</li></a>
        <a href="#"><li>careers</li></a>
        <a href="#"><li>extras</li></a>
        <a href="#"><li>technology</li></a>
        <a href="#"><li>about</li></a>
      </nav>
    </header>
  )
}