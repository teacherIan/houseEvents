import styles from './points.module.css';
import { GiReturnArrow } from 'react-icons/gi';
import DataPoint from './event/DataPoint';
import ReturnButton from '../buttons/ReturnButton.jsx';
import { motion } from 'framer-motion';

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

export default function Points({ setViewPoints, setMenuState }) {
  return (
    <motion.section className={styles.container} animate={{ opacity: 1 }}>
      <motion.header animate={{ opacity: 1 }}>Login</motion.header>

      <motion.form animate={{ opacity: 1 }}>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <motion.button whileHover={hover} onClick={clickHandler}>
          Submit
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
