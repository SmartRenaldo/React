import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const author = 'Delia Owens';
const Book = () => {
  const title = 'Where the Crawdads Sing';

  return (
    <article className='book'>
      <img src='https://images-fe.ssl-images-amazon.com/images/I/71FXfPs-iyL._AC_UL604_SR604,400_.jpg' />
      <h1 className='display-5'>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
