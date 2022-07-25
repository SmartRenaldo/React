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

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src='https://images-fe.ssl-images-amazon.com/images/I/71FXfPs-iyL._AC_UL604_SR604,400_.jpg' />
);

const Title = () => <h1 className='display-5'>Where the Crawdads Sing</h1>;
const Author = () => (
  <h4 style={{ color: '#427eb5', fontSize: '2rem', letterSpacing: '0.25rem' }}>
    Delia Owens
  </h4>
);

ReactDom.render(<BookList />, document.getElementById('root'));
