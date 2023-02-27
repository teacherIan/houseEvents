import style from './points.module.css';
import { GiReturnArrow } from 'react-icons/gi';
import DataPoint from './event/DataPoint';

const dummyData = [
  {
    name: 'johnny',
    event: 'Running',
    date: '03:01:2023',
    pointsAwarded: 10,
  },

  {
    name: 'billy',
    event: 'Basketball',
    date: '03:07:2023',
    pointsAwarded: 20,
  },

  {
    name: 'johnny',
    event: 'Soccer',
    date: '03:05:2023',
    pointsAwarded: 30,
  },
];

export default function Points({ setViewPoints }) {
  return (
    <>
      <i onClick={() => setViewPoints(false)} className={style.i}>
        <GiReturnArrow />
        <br />
        Go Back
      </i>
      <header className={style.header}>Points Awarded</header>
      <div className={style.dataPoints}>
        {dummyData.map((dataPoint, index) => (
          <DataPoint key={index} />
        ))}
      </div>
    </>
  );
}
