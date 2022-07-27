import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('X');
  const firstValueText1 = text || 'hello world';
  const secondValueText1 = text && 'hello world';
  const firstValueText2 = text2 || 'hello world';
  const secondValueText2 = text2 && 'hello world';

  return (
    <>
      <div className='display-6 my-4'>
        First value text 1: {firstValueText1}
      </div>
      <div className='display-6 my-4'>
        Second value text 1: {secondValueText1}
      </div>
      <div className='display-6 my-4'>
        First value text 2: {firstValueText2}
      </div>
      <div className='display-6 my-4'>
        Second value text 2: {secondValueText2}
      </div>
    </>
  );
};

export default ShortCircuit;
