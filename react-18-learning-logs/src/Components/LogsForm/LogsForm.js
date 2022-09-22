import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = (props) => {
  //save data in the form

  const [inputDate, setInputDate] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputTime, setInputTime] = useState('');

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const descChangeHandler = (e) => {
    setInputTitle(e.target.value);
  };

  const timeChangeHandler = (e) => {
    setInputTime(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const newLog = {
      date: new Date(inputDate),
      title: inputTitle,
      time: +inputTime,
    };

    props.onSaveLog(newLog);

    setInputDate('');
    setInputTitle('');
    setInputTime('');
  };

  return (
    <Card className='logs-form'>
      <form>
        <div className='form-item'>
          <label htmlFor='date'>Date</label>
          <input
            onChange={dateChangeHandler}
            value={inputDate}
            id='date'
            type='date'
          />
        </div>
        <div className='form-item'>
          <label htmlFor='desc'>Content</label>
          <input
            onChange={descChangeHandler}
            value={inputTitle}
            id='desc'
            type='text'
          />
        </div>
        <div className='form-item'>
          <label htmlFor='time'>Time</label>
          <input
            onChange={timeChangeHandler}
            value={inputTime}
            id='time'
            type='number'
          />
        </div>
        <div className='form-btn'>
          <button onClick={formSubmitHandler}>Add</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
