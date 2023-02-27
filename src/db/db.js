import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import { addAdmin } from './addAdmin.js';

const firebaseConfig = {
  apiKey: 'AIzaSyD4rmUu9nPKwC_erNodLrUAGistX2J-0kU',
  authDomain: 'sports-day-f6238.firebaseapp.com',
  projectId: 'sports-day-f6238',
  storageBucket: 'sports-day-f6238.appspot.com',
  messagingSenderId: '572383911374',
  appId: '1:572383911374:web:18e4720659880661559f9f',
  measurementId: 'G-3SHRKS4TEL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
