import React from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = () => {
  return (
    <Card className='logs-form'>
      <form>
        <div className='form-item'>
          <label htmlFor='date'>Date</label>
          <input id='date' type='date' />
        </div>
        <div className='form-item'>
          <label htmlFor='desc'>Content</label>
          <input id='desc' type='text' />
        </div>
        <div className='form-item'>
          <label htmlFor='time'>Time</label>
          <input id='time' type='number' />
        </div>
        <div className='form-btn'>
          <button>Add</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
