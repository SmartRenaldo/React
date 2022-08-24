import LogItem from './LogItem/LogItem';
import './Logs.css';

const Logs = () => {
  const logsData = [
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
  ];

  const logItemDate = logsData.map((item) => (
    <LogItem
      key={item.id}
      date={item.date}
      title={item.title}
      time={item.time}
    />
    // <LogItem key={item.id} {...item} />
  ));

  return <div className='logs'>{logItemDate}</div>;
};

export default Logs;
