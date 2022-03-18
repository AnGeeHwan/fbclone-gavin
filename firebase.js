import firebase from 'firebase/compat/app'
import "firebase/compat/storage"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCa37bcGxIXwlgBIjatfgNPJV83Ok4YoH0",
  authDomain: "facebook-gavin.firebaseapp.com",
  projectId: "facebook-gavin",
  storageBucket: "facebook-gavin.appspot.com",
  messagingSenderId: "663056739952",
  appId: "1:663056739952:web:ad9a180fe97414cf7d8eb5"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };