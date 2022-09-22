import LogItem from './LogItem/LogItem';
import './Logs.css';
import Card from '../UI/Card/Card';

const Logs = (props) => {
  const logItemDate = props.logsData.map((item, index) => (
    <LogItem
      key={item.id}
      date={item.date}
      title={item.title}
      time={item.time}
      onDelLog={() => props.onDelLog(index)}
    />
  ));

  return <Card className='logs'>{logItemDate}</Card>;
};

export default Logs;
