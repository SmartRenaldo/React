import LogItem from './LogItem/LogItem';
import './Logs.css';

const Logs = () => {
  return (
    <div className='logs'>
      <LogItem
        date={new Date(new Date() - 15 * 24 * 60 * 60 * 1000)}
        title={'React'}
        time={'50'}
      />
      <LogItem
        date={new Date(new Date() - 12 * 24 * 60 * 60 * 1000)}
        title={'Angular'}
        time={'40'}
      />
      <LogItem
        date={new Date(new Date() - 9 * 24 * 60 * 60 * 1000)}
        title={'TypeScript'}
        time={'20'}
      />
      <LogItem
        date={new Date(new Date() - 5 * 24 * 60 * 60 * 1000)}
        title={'FPS'}
        time={'40'}
      />
    </div>
  );
};

export default Logs;
