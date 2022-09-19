import React from 'react';
import Content from '../Content/Content';
import DateComp from '../DateCamp/DateComp';
import './LogItem.css';
import Card from '../../UI/Card/Card';

const LogItem = (props) => {
  return (
    <Card className='item'>
      <DateComp date={props.date} />
      <Content title={props.title} time={props.time} />
    </Card>
  );
};

export default LogItem;
