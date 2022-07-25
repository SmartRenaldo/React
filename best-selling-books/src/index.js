import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const firstBook = {
  img: 'https://images-fe.ssl-images-amazon.com/images/I/71FXfPs-iyL._AC_UL604_SR604,400_.jpg',
  title: 'Where the Crawdads Sing',
  author: 'Delia Owens',
};

const secondBook = {
  img: 'https://images-fe.ssl-images-amazon.com/images/I/71luEOJVzJL._AC_UL604_SR604,400_.jpg',
  title: 'The Lord Of The Rings [Illustrated Edition]',
  author: 'J r r Tolkien',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);

  return (
    <article className='book'>
      <img src={props.img} />
      <h1 className='display-6'>{props.title}</h1>
      <h4>{props.author}</h4>
      <p>{props.job}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
