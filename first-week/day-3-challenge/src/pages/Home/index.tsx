import { useState } from "react";
import Lottie from 'react-lottie';
import Switch from "react-switch";
import animationData from '../../assets/animation.json';

import './styles.scss';

export function Home() {
  const [checked, setChecked] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  });

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  function handleChangeChecked() {
    setChecked(!checked);
  }

  return (
    <div className="container">
      <header className='header-container'>
        <Switch
          checked={checked}
          onChange={handleChangeChecked}
          onColor='#24658a'
          onHandleColor="#19455f"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
          activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
          height={20}
          width={48}
        />
      </header>

      <main className='main-container'>
        {checked && (
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        )}
      </main>
    </div>
  )
}