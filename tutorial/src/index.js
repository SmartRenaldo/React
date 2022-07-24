import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return (
    <React.Fragment>
      <h2>JSX Rules</h2>
      <article>This is Renaldo and this is my first component!</article>
      <input type='text' />
    </React.Fragment>
  );
}

// messy way, not recommended
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello Renaldo')
//   );
// };

ReactDom.render(<Greeting />, document.getElementById('root'));
