const App = () => {
  const clickHandler = () => {
    // In React, you can not cancel default behaviors by return false
    alert('Awesome!');
  };

  const clickHandlerCancelDefaultBehavior = (event) => {
    // In React, you can not cancel default behaviors by return false
    // preventDefault() could be used to cancel default behaviors
    event.preventDefault();
    event.stopPropagation();
    alert('Awesome!');
  };
  return (
    <div
      onClick={() => {
        alert('parent alert!');
      }}
      style={{ width: 200, height: 200, margin: '100px auto' }}
    >
      <button onClick={clickHandler}>Awesome!</button>
      <button
        onClick={() => {
          alert('Legendary!');
        }}
      >
        Lenegdary!
      </button>
      <br />
      <a href='https://www.google.com' onClick={clickHandler}>
        To Google
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a
        href='https://www.google.com'
        onClick={clickHandlerCancelDefaultBehavior}
      >
        To Google
      </a>
    </div>
  );
};

export default App;
