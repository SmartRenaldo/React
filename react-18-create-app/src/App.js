import React from 'react';
import { useState } from 'react';
import A from './A';
import classes from './App.module.css';

const App = () => {
  const [showBorder, setShowBorder] = useState(false);

  const clickHandler = () => {
    setShowBorder(!showBorder);
  };

  return (
    <div>
      <p className={`${classes.p1} ${showBorder ? classes.Border : ''}`}>
        biubiubiu~
      </p>
      <A />
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default App;
