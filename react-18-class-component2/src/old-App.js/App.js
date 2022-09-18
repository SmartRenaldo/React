import './App.css';

const App = () => {
  const clickHandler = () => {
    const header = document.getElementById('header');
    header.innerHTML = 'Hello World';
  }

  return (
    <div>
      <h1 id='header'>Header</h1>
      <button onClick={clickHandler}>Press Here</button>
    </div>
  );
};

export default App;
