import './App.css';
import { useState } from 'react';

const App = () => {
  const users = [
    { id: 0, name: 'Scott', age: 24, description: 'awesome' },
    { id: 1, name: 'Anna', age: 24, description: 'awesome' },
    { id: 2, name: 'Joe', age: 24, description: 'awesome' },
  ];

  const randomInt = Math.floor(Math.random() * users.length);
  const [user, setUser] = useState(users[randomInt]);

  const changeUser = () => {
    if (user.id === 0) {
      setUser({ ...user, id: users[1].id, name: users[1].name });
    } else if (user.id === 1) {
      setUser({ ...user, id: users[2].id, name: users[2].name });
    } else if (user.id === 2) {
      setUser({ ...user, id: users[0].id, name: users[0].name });
    }
  };

  return (
    <div className='app'>
      <div className='my-5'>
        <h2>name: {user.name}</h2>
        <h2>age: {user.age}</h2>
        <h2>description: {user.description}</h2>
      </div>
      <button type='button' onClick={changeUser} className='btn btn-dark'>
        Change User
      </button>
    </div>
  );
};

export default App;
