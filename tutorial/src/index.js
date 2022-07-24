import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return (
    <React.Fragment>
      <TopMsg />
      <Animal />
      <input type='text' />
    </React.Fragment>
  );
}

const Animal = () => <h1>alexander King</h1>;
const TopMsg = () => {
  return (
    <div>
      <h2>JSX Rules</h2>
      <article>This is Renaldo and this is my first component!</article>
    </div>
  );
};

ReactDom.render(<Greeting />, document.getElementById('root'));
