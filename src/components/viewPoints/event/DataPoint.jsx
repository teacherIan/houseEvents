import style from './dataPoint.module.css';

export default function DataPoint({
  competition,
  givenBy,
  house,
  name,
  otherInfo,
  points,
}) {
  console.log(competition);
  return (
    <>
      <div className={style.container}>
        <div className={style.givenBy}>Points given by:{givenBy}</div>
        <div className={style.house}>House:{house}</div>
        <div className={style.name}>Name:{name}</div>
        <div className={style.other}>Other Information:{otherInfo}</div>
        <div className={style.points}>Points:{points}</div>
      </div>
    </>
  );
}
