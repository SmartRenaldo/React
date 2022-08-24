import React from 'react';
import './DateComp.css';

const DateComp = (props) => {
  const month = props.date.toLocaleString('en-AU', { month: 'long' });
  const date = props.date.getDate();

  return (
    <div className='date'>
      <div className='month'>{month}</div>
      <div className='day'>{date}</div>
    </div>
  );
};

export default DateComp;
