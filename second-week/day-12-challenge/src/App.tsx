import { useState } from 'react';

import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';

import './styles/home.scss';

export function App() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);

  function handleChecked1() {
    setChecked1(true);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
    setChecked5(false);
  }

  function handleChecked2() {
    setChecked2(true);
    setChecked1(false);
    setChecked3(false);
    setChecked4(false);
    setChecked5(false);
  }

  function handleChecked3() {
    setChecked3(true);
    setChecked1(false);
    setChecked2(false);
    setChecked4(false);
    setChecked5(false);
  }

  function handleChecked4() {
    setChecked4(true);
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked5(false);
  }

  function handleChecked5() {
    setChecked5(true);
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
  }

  return (
    <div className="content">
      <div className="slides">
        <input type="radio" name='item' id="slide1" checked={checked1} />
        <input type="radio" name='item' id="slide2" checked={checked2} />
        <input type="radio" name='item' id="slide3" checked={checked3} />
        <input type="radio" name='item' id="slide4" checked={checked4} />
        <input type="radio" name='item' id="slide5" checked={checked5} />

        <div className='item first-item'><img src={image1} alt="Imagem 1 do carrossel" /></div>
        <div className='item'><img src={image2} alt="Imagem 2 do carrossel" /></div>
        <div className='item'><img src={image3} alt="Imagem 3 do carrossel" /></div>
        <div className='item'><img src={image4} alt="Imagem 4 do carrossel" /></div>
        <div className='item'><img src={image5} alt="Imagem 5 do carrossel" /></div>
      </div>

      <div className='navigation'>
        <label className='bar' htmlFor="slide1" onClick={handleChecked1}></label>
        <label className='bar' htmlFor="slide2" onClick={handleChecked2}></label>
        <label className='bar' htmlFor="slide3" onClick={handleChecked3}></label>
        <label className='bar' htmlFor="slide4" onClick={handleChecked4}></label>
        <label className='bar' htmlFor="slide5" onClick={handleChecked5}></label>
      </div>
    </div>
  )
}
