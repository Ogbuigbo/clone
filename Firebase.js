import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFgSTUQMnPy4VGE6C-DDA7bJoakMZOvt0",
    authDomain: "linkedin-clone-765cb.firebaseapp.com",
    projectId: "linkedin-clone-765cb",
    storageBucket: "linkedin-clone-765cb.appspot.com",
    messagingSenderId: "212570633145",
    appId: "1:212570633145:web:a5bac93c185ff10eef3c68",
    measurementId: "G-QMEHC60SE3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export{ db, auth} ;
  