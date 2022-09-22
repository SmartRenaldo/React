import React from 'react';
import Content from '../Content/Content';
import DateComp from '../DateCamp/DateComp';
import './LogItem.css';
import Card from '../../UI/Card/Card';

const LogItem = (props) => {
  const deleteItemHandler = () => {
    const isDeleting = window.confirm('Do you want to delete this item?');

    if (isDeleting) {
      props.onDelLog(props.logIndex);
    }
  };

  return (
    <Card className='item'>
      <DateComp date={props.date} />
      <Content title={props.title} time={props.time} />

      <div className='delete' onClick={deleteItemHandler}>
        x
      </div>
    </Card>
  );
};

export default LogItem;
