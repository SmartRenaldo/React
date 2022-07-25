import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value);
  // console.log(handler);
  const [text, setText] = useState('random title');

  const handleClick = () => {
    setText('hello world');
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' class='btn btn-primary' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
