import style from './dataPoint.module.css';

export default function DataPoint() {
  return (
    <>
      <div className={style.container}>
        <div className={style.givenBy}>Points given by:</div>
      </div>
    </>
  );
}
