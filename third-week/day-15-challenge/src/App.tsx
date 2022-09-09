import { Header } from "./components/Header";

import basketClubImg from './assets/basket-club-branco.jpg';
import microdeerImg from './assets/microdeer-brand-running.jpg';
import leadComfortImg from './assets/sapato-lead-comfort.jpg';
import tenisCorridaImg from './assets/tenis-corrida-pink.jpg';
import tenisMaxFashionImg from './assets/tenis-de-caminhada-max-fashion.jpg';
import tenisPollyImg from './assets/tenis-de-caminhada-polly.jpg';
import tenisUltimateFireImg from './assets/tenis-de-caminhada-ultimate-fire.jpg';
import tenisItalianoImg from './assets/tenis-italiano-de-couro.jpg';
import tenisPlataformaImg from './assets/tenis-plataforma-braky.jpg';
import VansClassicsImg from './assets/vans-classics-old-skool.png';

import './styles/home.scss';

export function App() {
  return (
    <>
      <Header />

      <main className="main-container">
        <div>
          <img src={basketClubImg} alt="" />

          <h2>Porsche sports like</h2>

          <p>$84</p>
        </div>

        <div>
          <img src={microdeerImg} alt="" />

          <h2>Microdeer brand running</h2>

          <p>$90</p>
        </div>

        <div>
          <img src={leadComfortImg} alt="" />

          <h2>Sapato lead comfort</h2>

          <p>$76</p>
        </div>

        <div>
          <img src={tenisCorridaImg} alt="" />

          <h2>Tenis corrida pink</h2>

          <p>$80</p>
        </div>

        <div>
          <img src={tenisMaxFashionImg} alt="" />

          <h2>Tenis de caminhada max fashion</h2>

          <p>$92</p>
        </div>

        <div>
          <img src={tenisPollyImg} alt="" />

          <h2>Tenis de caminhada polly</h2>

          <p>$98</p>
        </div>

        <div>
          <img src={tenisUltimateFireImg} alt="" />

          <h2>Tenis de caminhada ultimate fire</h2>

          <p>$89</p>
        </div>

        <div>
          <img src={tenisItalianoImg} alt="" />

          <h2>Tenis italiano de couro</h2>

          <p>$72</p>
        </div>

        <div>
          <img src={tenisPlataformaImg} alt="" />

          <h2>Tenis plataforma braky</h2>

          <p>$90</p>
        </div>

        <div>
          <img src={VansClassicsImg} alt="" />

          <h2>Vans classics old skool</h2>

          <p>$97</p>
        </div>
      </main>
    </>
  )
}
