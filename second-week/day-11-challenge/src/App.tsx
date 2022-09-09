import { IoMdPlanet } from 'react-icons/io';
import illustrationImg from './assets/illustration.svg';

import './styles/home.scss';

export function App() {
  return (
    <div className="container">
      <aside>
        <IoMdPlanet color='#fff' size={24} />

        <h1>Be part for our awesome team and <br /> have fun with us</h1>

        <img src={illustrationImg} alt="Ilustração de foguete decolando" />
      </aside>
      <main>
        <form>
          <label htmlFor="">
            FULL NAME <br />
            <input
              type="text"
              placeholder='Enter your full name'
              required
            />
          </label>

          <label htmlFor="">
            PASSWORD <br />
            <input
              type="password"
              placeholder='XXXXXX'
              required
            />
          </label>

          <label htmlFor="">
            E-MAIL <br />
            <input
              type="email"
              placeholder='Enter your email address'
              required
            />
          </label>

          <span>
            <input type="checkbox" />
            By signing up you agree <strong>Terms &amp; Conditions</strong>
          </span>

          <button type="submit">
            Sign Up
          </button>
        </form>
      </main>
    </div>
  )
}
