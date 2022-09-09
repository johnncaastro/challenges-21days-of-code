import { useState } from 'react';
import { GiRingedPlanet } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { MenuResponsive } from '../MenuResponsive';

import './styles.scss';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <a href="#">
        <GiRingedPlanet color='#fff' size={22} />
        <span>cashfly</span>
      </a>

      <nav className='nav-menu'>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Product</li></a>
        <a href="#"><li>Pricing</li></a>
        <button type="button" className='signup-button'>Sign up</button>
      </nav>

      <button type="button" className='menu-button'>
        {isOpen ? (
          <GrClose color='#fff' size={22} onClick={handleToggleMenu} />
        ): <GiHamburgerMenu color='#fff' size={22} onClick={handleToggleMenu} />}
      </button>

      {isOpen && <MenuResponsive />}
    </header>
  )
}