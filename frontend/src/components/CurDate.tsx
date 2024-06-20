import { useState, useEffect } from 'react';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    // @ts-ignore
    const ordinalSuffix = (day) => {
      if (day > 3 && day < 21) return 'th'; // covers 11th - 20th
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    const formattedDate = `${day}${ordinalSuffix(day)} ${month} ${year}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div>
      <span> {currentDate}</span>
    </div>
  );
};

export default CurrentDate;