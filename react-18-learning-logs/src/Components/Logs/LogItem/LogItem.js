import React, { useState } from 'react';
import Content from '../Content/Content';
import DateComp from '../DateCamp/DateComp';
import './LogItem.css';
import Card from '../../UI/Card/Card';
import ConfirmModal from '../../UI/ConfirmModal/ConfirmModal';

const LogItem = (props) => {
  const [showDeleteConfirmationWindow, setShowDeleteConfirmationWindow] =
    useState(false);

  const deleteItemHandler = () => {
    setShowDeleteConfirmationWindow(true);
  };

  const cancelHandler = () => {
    setShowDeleteConfirmationWindow(false);
  };

  const okHandler = () => {
    props.onDelLog();
    setShowDeleteConfirmationWindow(false);
  };

  return (
    <Card className='item'>
      <DateComp date={props.date} />
      <Content title={props.title} time={props.time} />
      <div className='delete' onClick={deleteItemHandler}>
        x
      </div>
      {showDeleteConfirmationWindow && (
        <ConfirmModal
          confirmText='Do you want to delete?'
          onOk={okHandler}
          onCancel={cancelHandler}
        />
      )}
    </Card>
  );
};

export default LogItem;
