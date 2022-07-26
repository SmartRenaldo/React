import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'alexanda',
    age: 27,
    message: 'hello world!',
  });

  const changeMessage = () => {
    if (person.message === 'hello world!') {
      setPerson({ ...person, message: 'random message' });
    } else {
      setPerson({ ...person, message: 'hello world!' });
    }
  };

  return (
    <>
      <h3 className='lead fs-2 fw-bolder fst-italic'>{person.name}</h3>
      <h3 className='lead fs-2 fw-bolder fst-italic'>{person.age}</h3>
      <h3 className='lead fs-2 fw-bolder fst-italic'>{person.message}</h3>
      <button className='btn btn-info' onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
