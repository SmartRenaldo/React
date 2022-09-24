import './LogFilter.css';
import React, { useState } from 'react';

const LogFilter = (props) => {
  const [year1, setYear1] = useState(+new Date().getFullYear());
  const [year2, setYear2] = useState(+new Date().getFullYear() - 1);
  const [year3, setYear3] = useState(+new Date().getFullYear() - 2);

  const yearChangeHandler = (e) => {
    props.onYearChange(+e.target.value);
  };

  return (
    <div>
      Year:{' '}
      <select
        value={props.year}
        className='selectWindow'
        onChange={yearChangeHandler}
      >
        <option value={year1} className='selectOption'>
          {year1}
        </option>
        <option value={year2} className='selectOption'>
          {year2}
        </option>
        <option value={year3} className='selectOption'>
          {year3}
        </option>
      </select>
    </div>
  );
};

export default LogFilter;
