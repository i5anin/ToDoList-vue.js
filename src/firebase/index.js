import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_SECRET_API_KEY,
  authDomain: process.env.VUE_APP_SECRET_authDomain,
  projectId: process.env.VUE_APP_SECRET_projectId,
  storageBucket: process.env.VUE_APP_SECRET_storageBucket,
  messagingSenderId: process.env.VUE_APP_SECRET_messagingSenderId,
  appId: process.env.VUE_APP_SECRET_appId,
  measurementId: process.env.VUE_APP_SECRET_measurementId,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { auth, database };
