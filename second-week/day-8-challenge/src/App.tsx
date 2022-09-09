import { useState } from 'react';
import Switch from 'react-switch';
import classnames from 'classnames';

import './styles/home.scss';

export function App() {
  const [checked, setChecked] = useState(false);

  function handleChangeSwitch() {
    setChecked(!checked);
  }

  return (
    <main className={classnames('main-container', {
      'isChecked': checked,
      'notIsChecked': !checked,
    })}>
      <div className='switch-container'>
        <Switch
          checked={checked}
          onChange={handleChangeSwitch}
          onColor="#b1b2b3"
          offColor="#d6be05"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
    </main>
  )
}
