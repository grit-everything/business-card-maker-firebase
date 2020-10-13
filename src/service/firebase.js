import firebase from 'firebase';
import dotenv from 'dotenv';
// dotenv.config({ path: path.join(__dirname, 'path/to/.env') });
// require('dotenv').config({ path: 'path/to/file' });
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// console.log(process.env.REACT_APP_FIREBASE_API_KEY);
// console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
