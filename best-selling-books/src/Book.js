import React from 'react';

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
      <img src={img} alt='' />
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

export default Book;
