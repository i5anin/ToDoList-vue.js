<template></template>

<script>
export default {
  name: "data.vue",
};
import { getDatabase } from "firebase/database";

const database = getDatabase();

import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Замените конфигурацией проекта Firebase вашего приложения
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // The value of databaseURL depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  // For Firebase JavaScript SDK v7.20.0 and later, measurementId is an optional field
  measurementId: "G-MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
</script>

<style scoped></style>
