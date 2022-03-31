import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4-IG9tGEO0uV4WnXusr7Kd-DGoo4Q0uI",
  authDomain: "readinglistapp9.firebaseapp.com",
  projectId: "readinglistapp9",
  storageBucket: "readinglistapp9.appspot.com",
  messagingSenderId: "308884203933",
  appId: "1:308884203933:web:446d54fab63bdb82276774"
};

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

export {db};