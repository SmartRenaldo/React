import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return (
    <div>
      <article>This is Renaldo and this is my first component!</article>
    </div>
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
