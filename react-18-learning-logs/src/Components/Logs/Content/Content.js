import React from 'react';
import './Content.css';

const Content = (props) => {
  return (
    <div className='content'>
      <div className='title'>{props.title}</div>
      <div className='time'>{props.time}</div>
    </div>
  );
};

export default Content;
