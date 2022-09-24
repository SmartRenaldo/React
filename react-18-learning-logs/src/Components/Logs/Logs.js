import LogItem from './LogItem/LogItem';
import './Logs.css';
import Card from '../UI/Card/Card';
import LogFilter from './LogFilter/LogFilter';
import { useState } from 'react';

const Logs = (props) => {
  const [year, setYear] = useState(+new Date().getFullYear());

  let filterData = props.logsData.filter(
    (item) => item.date.getFullYear() == year
  );

  const changeYearHandler = (year) => {
    setYear(year);
  };

  const logItemDate = filterData.map((item) => (
    <LogItem
      key={item.id}
      date={item.date}
      title={item.title}
      time={item.time}
      onDelLog={() => props.onDelLog(item.id)}
    />
  ));

  return (
    <Card className='logs'>
      <LogFilter year={year} onYearChange={changeYearHandler} />
      {logItemDate.length ? (
        logItemDate
      ) : (
        <p className='noData'>No data found!</p>
      )}
    </Card>
  );
};

export default Logs;
