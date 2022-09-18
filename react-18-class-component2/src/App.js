import './App.css';
import { Component } from 'react';
import User from './components/User';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <User id={2} name={'Sanzi'} age={23} />
      </div>
    );
  }
}

export default App;
