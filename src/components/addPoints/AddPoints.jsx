import styles from './addPoints.module.css';
import { motion } from 'framer-motion';

const hover = {
  backgroundColor: '#DFBBB1',
  color: '#373F51',
  scale: 1.1,
  // border: `#373F51 5px solid`,
  opacity: 1,
};

export default function AddPoints({ setMenuState }) {
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
        <motion.button whileHover={hover}>Submit</motion.button>
      </motion.form>
    </motion.section>
  );
}
