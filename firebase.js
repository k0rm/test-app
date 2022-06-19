// Import the functions you need from the SDKs you need

// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoahVLNnQyxwgdckODg6Re3GJTIL8c2as",
  authDomain: "feoy0206.firebaseapp.com",
  projectId: "feoy0206",
  storageBucket: "feoy0206.appspot.com",
  messagingSenderId: "124619152517",
  appId: "1:124619152517:web:afd82044cf4e43200eddec",
  measurementId: "G-L5Y3ZLE6EP",
  "databaseURL": "https://feoy0206-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

// const al = ref(db, "matchEm");
// onValue(al, (snapshot) => {
//   console.log("YERP");
//   const dt = snapshot.val();
//   console.log(dt);
// })
// console.log(al);

export { db };