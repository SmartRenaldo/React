import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [isBlueBorder, setIsBlueBorder] = useState(true);

  const pStyle = {
    color: 'red',
    backgroundColor: 'black',
    border: isBlueBorder && 'blue solid 2px',
  };

  const clickHandler = () => {
    setIsBlueBorder(!isBlueBorder);
  };

  return (
    <div>
      <p className={`p1 ${isBlueBorder ? '' : 'redBorder'}`} style={pStyle}>
        biubiubiu~
      </p>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default App;
