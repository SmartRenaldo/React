import LogItem from './LogItem/LogItem';
import './Logs.css';
import Card from '../UI/Card/Card';

const Logs = (props) => {
  const logItemDate = props.logsData.map((item) => (
    <LogItem
      key={item.id}
      date={item.date}
      title={item.title}
      time={item.time}
    />
  ));

  return <Card className='logs'>{logItemDate}</Card>;
};

export default Logs;
