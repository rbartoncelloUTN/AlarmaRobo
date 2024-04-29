// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA3TczWvBKTtOT0hX22XlQgYX2JCnFg_xk',
  authDomain: 'loginapppps.firebaseapp.com',
  projectId: 'loginapppps',
  storageBucket: 'loginapppps.appspot.com',
  messagingSenderId: '352647240452',
  appId: '1:352647240452:web:ca06dc609ac20eb41d0e51',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
