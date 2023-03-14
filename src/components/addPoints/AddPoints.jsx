import styles from './addPoints.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { db } from '../../db/db.js';
import { collection, addDoc } from 'firebase/firestore';
import { UserAuth } from '../../context/AuthContext';
import ReturnButton from '../buttons/ReturnButton';
import { serverTimestamp } from 'firebase/firestore';

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
  const [points, setPoints] = useState(0);
  const [otherInfo, setOtherInfo] = useState('');
  const [house, setHouse] = useState('');
  const [grade, setGrade] = useState(0);
  const [gender, setGender] = useState('');

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
        grade: grade,
        created: serverTimestamp(),
        gender: gender,
      });
      alert('Points Added successfully!');
      setName('');
      setCompetition('');
      setPoints('');
      setOtherInfo('');
      setHouse('');
      setGrade('');
      setMenuState(-1);
    } catch (e) {
      console.log('Error adding document: ', e);
    }
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
            Event:
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
            Grade:
            <input
              onChange={(e) => setGrade(e.target.value)}
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
          <div className={styles.houseLabel}>Gender:</div>
          <label>
            Male:
            <input
              onClick={(e) => setGender(e.target.value)}
              className={styles.radioInput}
              type="radio"
              value="Male"
              name="gender"
            />
            Female:
            <input
              onClick={(e) => setGender(e.target.value)}
              className={styles.radioInput}
              type="radio"
              value="Female"
              name="gender"
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
