import React from 'react';
import Content from './Content';
import DateComp from './DateComp';
import './LogItem.css';

const LogItem = () => {
  return (
    <div className='item'>
      <DateComp />
      <Content />
    </div>
  );
};

export default LogItem;
