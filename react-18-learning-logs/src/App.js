import Logs from './Components/Logs/Logs';
import LogsForm from './Components/LogsForm/LogsForm';
import Card from './Components/UI/Card/Card';
import './App.css';

const App = () => {
  return (
    <div className='container app'>
      <LogsForm />
      <Logs />
    </div>
  );
};

export default App;
