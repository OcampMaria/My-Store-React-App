import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJRG_0tbPVrC05Ogh-eVvVQX33tZojqj0",
    authDomain: "react-online-store-67d59.firebaseapp.com",
    projectId: "react-online-store-67d59",
    storageBucket: "react-online-store-67d59.appspot.com",
    messagingSenderId: "853782723386",
    appId: "1:853782723386:web:ae2caad20f0a1444192e03"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fire = firebase;
export default fire;