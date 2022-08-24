import React from 'react';
import Content from '../Content/Content';
import DateComp from '../DateCamp/DateComp';
import './LogItem.css';

const LogItem = (props) => {
  return (
    <div className='item'>
      <DateComp date={props.date} />
      <Content title={props.title} time={props.time} />
    </div>
  );
};

export default LogItem;
