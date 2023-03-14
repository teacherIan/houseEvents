import styles from './points.module.css';
import { GiReturnArrow } from 'react-icons/gi';
import DataPoint from './event/DataPoint';
import ReturnButton from '../buttons/ReturnButton.jsx';
import { motion } from 'framer-motion';
import { onSnapshot, doc, collection } from 'firebase/firestore';
import { db } from '../../db/db.js';
import { useState, useEffect } from 'react';

const hover = {
  backgroundColor: '#DFBBB1',
  color: '#373F51',
  scale: 1.1,
  // border: `#373F51 5px solid`,
  opacity: 1,
};

export default function Points({ setViewPoints, setMenuState }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = [];
    const unsubscribe = onSnapshot(
      collection(db, 'points'),
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        data.sort((a, b) => b.created - a.created);
        setData(data);

        return () => unsubscribe();
      }
    );
  }, []);

  return (
    <>
      <ReturnButton setMenuState={setMenuState} />
      <motion.section className={styles.container} animate={{ opacity: 1 }}>
        {data.map((data, index) => (
          <DataPoint
            key={index}
            competition={data.competition}
            givenBy={data.givenBy}
            house={data.house}
            name={data.name}
            otherInfo={data.otherInfo}
            points={data.points}
            grade={data.grade}
            created={data.created}
            gender={data.gender}
          />
        ))}
      </motion.section>
    </>
  );
}
