import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfg2LUGZUE3lPWly711a7EKEPJ2Mexni0",
  authDomain: "todolist-money-way.firebaseapp.com",
  projectId: "todolist-money-way",
  storageBucket: "todolist-money-way.appspot.com",
  messagingSenderId: "769898748189",
  appId: "1:769898748189:web:174f46161646ee3d0f69f4",
  measurementId: "G-6FX2T4KWPY",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
