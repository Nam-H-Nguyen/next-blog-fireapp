import firebase, { initializeApp, getAnalytics } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestorage';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBilXOHh5kcRrAnrfqcMfI9vKiFjjZerLM",
  authDomain: "next-blog-fireapp.firebaseapp.com",
  projectId: "next-blog-fireapp",
  storageBucket: "next-blog-fireapp.appspot.com",
  messagingSenderId: "540682830917",
  appId: "1:540682830917:web:dda29d2fed9e8834968f2c",
  measurementId: "G-PCS1FQY3N0"
};

// Initialize Firebase
// Next may run this file twice, wrapper avoids this case
if(!firebase.apps.length) {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();