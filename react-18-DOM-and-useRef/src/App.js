import {useRef, useState} from 'react';

let tmp;
let tmp2;

const App = () => {
  const refHeader = useRef();
  const [count, setCount] = useState(1);
  const refTmp = {current:null};
  const refTmp2 = useRef();

  console.log(tmp === refTmp);
  console.log(tmp2 === refTmp2);

  tmp = refTmp;
  tmp2 = refTmp2;

  const clickHandler = () => {
    // console.log(refHeader);
    refHeader.current.innerText = 'Hello World';
  }

  const addHandler = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h1 ref={refHeader}>Header</h1>
      <button onClick={clickHandler}>Press Here</button>
      <br/>
      <h1 onClick={addHandler}>Count Adder</h1>
      <div className='display-6 fw-bold'>{count}</div>
      <h1 onClick={changeRef}></h1>
    </div>
  );
};

export default App;
