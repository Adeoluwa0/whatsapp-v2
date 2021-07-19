
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCvuLccrAsqHiOugGAOaiv1AQZmR8r9UOQ",
  authDomain: "whatsapp-2-e60b8.firebaseapp.com",
  projectId: "whatsapp-2-e60b8",
  storageBucket: "whatsapp-2-e60b8.appspot.com",
  messagingSenderId: "561791981297",
  appId: "1:561791981297:web:eee998bede98e82d12bb50"
};

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}
