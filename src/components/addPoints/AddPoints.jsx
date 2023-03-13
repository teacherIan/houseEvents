import styles from './addPoints.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { db } from '../../db/db.js';
import { collection, addDoc } from 'firebase/firestore';
import { UserAuth } from '../../context/AuthContext';
import ReturnButton from '../buttons/ReturnButton';

const hover = {
  backgroundColor: '#DFBBB1',
  color: '#373F51',
  scale: 1.1,
  // border: `#373F51 5px solid`,
  opacity: 1,
};

export default function AddPoints({ setMenuState }) {
  const [name, setName] = useState('');
  const [competition, setCompetition] = useState('');
  const [points, setPoints] = useState('');
  const [otherInfo, setOtherInfo] = useState('');
  const [house, setHouse] = useState('');

  const { user, logout, loggedIn, setLoggedIn, loading } = UserAuth();

  async function formSubmit(e) {
    e.preventDefault();
    console.log(name, competition, points, otherInfo, house);

    try {
      await addDoc(collection(db, 'points'), {
        name: name,
        competition: competition,
        points: points,
        otherInfo: otherInfo,
        house: house,
        givenBy: user.email,
      });
      alert('Document written with ID: ', docRef.id);
    } catch (e) {
      console.log('Error adding document: ', e);
    }

    setName('');
    setCompetition('');
    setPoints('');
    setOtherInfo('');
    setHouse('');
    alert('Points Added successfully!');
  }

  return (
    <>
      <ReturnButton setMenuState={setMenuState} />
      <motion.section className={styles.container} animate={{ opacity: 1 }}>
        <motion.header animate={{ opacity: 1 }}>Add Points</motion.header>

        <motion.form animate={{ opacity: 1 }}>
          <label className={styles.label}>
            Athletes Name:
            <input
              onChange={(e) => setName(e.target.value)}
              className={styles.textInput}
              type="text"
            />
          </label>
          <label className={styles.label}>
            Competition:
            <input
              onChange={(e) => setCompetition(e.target.value)}
              className={styles.textInput}
              type="text"
            />
          </label>
          <label className={styles.label}>
            Points Awarded:
            <input
              onChange={(e) => setPoints(e.target.value)}
              className={styles.textInput}
              type="number"
            />
          </label>
          <label className={styles.label}>
            Other Information:
            <input
              onChange={(e) => setOtherInfo(e.target.value)}
              className={styles.textInput}
              type="text"
            />
          </label>
          <div className={styles.houseLabel}>House:</div>
          <label className={styles.label}>
            Ruby:
            <input
              onClick={(e) => setHouse(e.target.value)}
              className={styles.radioInput}
              type="radio"
              value="Ruby"
              name="house"
            />
            Amber:
            <input
              onClick={(e) => setHouse(e.target.value)}
              className={styles.radioInput}
              type="radio"
              value="Amber"
              name="house"
            />
            Pearl:
            <input
              onClick={(e) => setHouse(e.target.value)}
              className={styles.radioInput}
              type="radio"
              value="Pearl"
              name="house"
            />
            Sapphire:
            <input
              onClick={(e) => setHouse(e.target.value)}
              className={styles.radioInput}
              type="radio"
              value="Sapphire"
              name="house"
            />
          </label>
          <motion.button onClick={formSubmit} whileHover={hover}>
            Submit
          </motion.button>
        </motion.form>
      </motion.section>
    </>
  );
}
