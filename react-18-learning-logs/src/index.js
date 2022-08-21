import ReactDOM from 'react-dom/client';
import './index.css';

const App = (
  <div className='logs'>
    <div className='item'>
      <div className='date'>
        <div className='month'>February</div>
        <div className='day'>25</div>
      </div>
      <div className='content'>
        <div className='title'>Learn Node.js</div>
        <div className='time'>30 min</div>
      </div>
    </div>
    <div className='item'>
      <div className='date'>
        <div className='month'>February</div>
        <div className='day'>28</div>
      </div>
      <div className='content'>
        <div className='title'>Learn Angular</div>
        <div className='time'>25 min</div>
      </div>
    </div>
    <div className='item'>
      <div className='date'>
        <div className='month'>March</div>
        <div className='day'>05</div>
      </div>
      <div className='content'>
        <div className='title'>Learn Vue</div>
        <div className='time'>30 min</div>
      </div>
    </div>
    <div className='item'>
      <div className='date'>
        <div className='month'>February</div>
        <div className='day'>22</div>
      </div>
      <div className='content'>
        <div className='title'>Learn React</div>
        <div className='time'>40 min</div>
      </div>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App);
