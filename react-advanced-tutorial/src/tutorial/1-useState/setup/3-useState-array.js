import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4 className='btn btn-success'>{name}</h4>
            <button onClick={() => removeItem(id)} className='btn btn-dark'>
              Remove
            </button>
          </div>
        );
      })}
      <button className='btn btn-secondary' onClick={() => setPeople([])}>
        Remove all items
      </button>
    </>
  );
};

export default UseStateArray;
