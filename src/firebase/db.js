import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance

var firebaseConfig = {
  apiKey: "AIzaSyCfg2LUGZUE3lPWly711a7EKEPJ2Mexni0",
  authDomain: "todolist-money-way.firebaseapp.com",
  projectId: "todolist-money-way",
  storageBucket: "todolist-money-way.appspot.com",
  messagingSenderId: "769898748189",
  appId: "1:769898748189:web:174f46161646ee3d0f69f4",
  measurementId: "G-6FX2T4KWPY",
};

export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
