import './App.css';

const App = () => {
  const addHandler = () => {};
  const subHandler = () => {};

  return (
    <div className='app'>
      <h1>1</h1>
      <button onClick={subHandler}>-</button>
      <button onClick={addHandler}>+</button>
    </div>
  );
};

export default App;
