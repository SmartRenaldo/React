import React from 'react';
import './Backdrop.css';
import { ReactDOM } from 'react';

const backdropRoot = document.getElementById('backdropRoot');

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className='Backdrop'>{props.children}</div>,
    backdropRoot
  );
};

export default Backdrop;
