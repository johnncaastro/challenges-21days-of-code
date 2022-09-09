import { MagnifyingGlass, HeartStraight } from "phosphor-react";

import '../styles/header.scss';

export function Header() {
  return (
    <header className="header-container">
      <a href="#"><h1>SP. Products</h1></a>

      <nav>
        <a href="#"><li>Products</li></a>
        <a href="#"><li>Category</li></a>
        <a href="#"><li>Customize</li></a>
        <a href="#"><li>Collection</li></a>
      </nav>

      <div>
        <button type="button">
          <MagnifyingGlass size={24} color="#7a7af1" />
        </button>
        <button type="button">
          <HeartStraight size={24} color="#7a7af1" />
        </button>
      </div>
    </header>
  )
}
