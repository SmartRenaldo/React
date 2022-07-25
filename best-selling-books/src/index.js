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
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          libero illum, aut, eius odio magni, adipisci sed ducimus quaerat ab
          beatae nostrum cum laboriosam. Ipsum cupiditate explicabo hic placeat
          quod.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, author, title, children }) => {
  // const { img, author, title } = props;

  return (
    <article className='book'>
      <img src={img} />
      <h1 className='display-6'>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
