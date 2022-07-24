import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Greeting() {
  return (
    <React.Fragment>
      <Button variant='primary'>Button as link</Button>
      <Button variant='success'>Button as link</Button>
    </React.Fragment>
  );
}

ReactDom.render(<Greeting />, document.getElementById('root'));
