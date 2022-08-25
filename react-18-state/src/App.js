import './App.css';
import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(1);
  const [errAddDisplay, setErrAddDisplay] = useState(false);
  const [errSubDisplay, setErrSubDisplay] = useState(false);

  const addHandler = () => {
    if (value < 10) {
      if (value == 0) {
        setErrSubDisplay(false);
      }

      setValue(value + 1);
      return;
    }

    setErrAddDisplay(true);
  };

  const subHandler = () => {
    if (value > 0) {
      if (value == 10) {
        setErrAddDisplay(false);
      }

      setValue(value - 1);
      return;
    }

    setErrSubDisplay(true);
  };

  return (
    <div className='app'>
      <h1>{value}</h1>
      <button onClick={subHandler}>-</button>
      <button onClick={addHandler}>+</button>
      {errSubDisplay && <h3>The value should be greater than -1!</h3>}
      {errAddDisplay && <h3>The value should be less than 11!</h3>}
    </div>
  );
};

export default App;
