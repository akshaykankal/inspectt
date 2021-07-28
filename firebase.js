import firebase from 'firebase'
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAIXnuW6JJZF_9pyXQSJqF5xSZUk4inTa4",
    authDomain: "gratup-50dec.firebaseapp.com",
    projectId: "gratup-50dec",
    storageBucket: "gratup-50dec.appspot.com",
    messagingSenderId: "637012357742",
    appId: "1:637012357742:web:d651a80132771f89bd6c7f",
    measurementId: "G-VELT1DV01S"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  const storage = app.storage()
  
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp()

  export { storage, timeStamp }

  export default db; 