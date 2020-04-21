import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyALIzXrDdjoyyC7uCnxvxs1I7N_DHRt3co",
    authDomain: "teamwork-edb4b.firebaseapp.com",
    databaseURL: "https://teamwork-edb4b.firebaseio.com",
    projectId: "teamwork-edb4b",
    storageBucket: "teamwork-edb4b.appspot.com",
    messagingSenderId: "614346522069",
    appId: "1:614346522069:web:a1d37cbf686a318abd115c",
    measurementId: "G-209QJWTZCN"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebaseConfig;