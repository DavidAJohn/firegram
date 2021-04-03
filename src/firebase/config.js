import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDRPZaO3srPrfDkc4PgB47LYgG_Gq97J9M",
    authDomain: "firegram-b8306.firebaseapp.com",
    projectId: "firegram-b8306",
    storageBucket: "firegram-b8306.appspot.com",
    messagingSenderId: "400379660626",
    appId: "1:400379660626:web:dee8fb679e0ca3e199128b"
  };

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
