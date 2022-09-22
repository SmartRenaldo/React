import Logs from './Components/Logs/Logs';
import LogsForm from './Components/LogsForm/LogsForm';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [logsData, setLogsData] = useState([
    {
      id: 0,
      date: new Date(2022, 7, 15, 15, 30),
      title: 'FPS',
      time: '40',
    },
    {
      id: 1,
      date: new Date(2022, 7, 20, 19, 25),
      title: 'TypeScript',
      time: '20',
    },
    {
      id: 2,
      date: new Date(new Date() - 15 * 24 * 60 * 60 * 1000),
      title: 'React',
      time: '50',
    },
    {
      id: 3,
      date: new Date(new Date() - 12 * 24 * 60 * 60 * 1000),
      title: 'Angular',
      time: '40',
    },
  ]);

  const saveLogHandler = (log) => {
    log.id = Date.now() + '';
    setLogsData([...logsData, log]);
  };

  return (
    <div className='container app'>
      <LogsForm onSaveLog={saveLogHandler} />
      <Logs logsData={logsData} />
    </div>
  );
};

export default App;
