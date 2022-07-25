import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-fe.ssl-images-amazon.com/images/I/71FXfPs-iyL._AC_UL604_SR604,400_.jpg',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
  },
  {
    id: 2,
    img: 'https://images-fe.ssl-images-amazon.com/images/I/71luEOJVzJL._AC_UL604_SR604,400_.jpg',
    title: 'The Lord Of The Rings [Illustrated Edition]',
    author: 'J r r Tolkien',
  },
  {
    id: 3,
    img: 'https://images-fe.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL604_SR604,400_.jpg',
    title: 'Atomic Habits: the life-changing million-copy',
    author: 'James Clear',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, author, title }) => {
  // const { img, author, title } = props;
  const addToCart = () => {
    alert('Add to cart successfully!');
  };

  const remove = () => {
    alert('Remove successfully!');
  };

  const log = (author, title) => {
    console.log(author);
    console.log(title);
  };

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} />
      <h1 className='display-6 text-center'>{title}</h1>
      <h4 className='text-center'>{author}</h4>
      <div class='d-flex justify-content-evenly'>
        <button type='button' class='btn btn-success my-2' onClick={addToCart}>
          Add To Cart
        </button>
        <button type='button' class='btn btn-secondary my-2' onClick={remove}>
          Remove
        </button>
        <button
          type='button'
          class='btn btn-dark'
          onClick={() => log(author, title)}
        >
          Log
        </button>
      </div>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
