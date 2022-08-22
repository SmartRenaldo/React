import React from 'react';
import Content from '../Content/Content';
import DateComp from '../DateCamp/DateComp';
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
