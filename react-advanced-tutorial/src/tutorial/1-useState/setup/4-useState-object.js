import React, { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('alexanda');
  const [age, setAge] = useState(27);
  const [message, setMessage] = useState('hello world!');

  const changeMessage = () => {
    if (message === 'hello world!') {
      setMessage('random message');
    } else {
      setMessage('hello world!');
    }
  };

  return (
    <>
      <h3 className='lead fs-2 fw-bolder fst-italic'>{name}</h3>
      <h3 className='lead fs-2 fw-bolder fst-italic'>{age}</h3>
      <h3 className='lead fs-2 fw-bolder fst-italic'>{message}</h3>
      <button className='btn btn-info' onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
