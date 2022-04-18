import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDj81hzAlMzRZXzjAJOIGmo0JsmHImFvPY",
  authDomain: "deepstash-77557.firebaseapp.com",
  projectId: "deepstash-77557",
  storageBucket: "deepstash-77557.appspot.com",
  messagingSenderId: "205658745028",
  appId: "1:205658745028:web:e4e0341eb6aac4be434191",
  measurementId: "G-1HRN3W4EPC",
};
const fire = firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();

export default fire;
