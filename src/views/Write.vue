<template></template>

<script>
//Code for set()
import { ref, set, update } from "firebase/database";
import { database } from "@/firebase";

export default {
  name: "Write",
};

//Code to generate key
const newKey = push(child(gameListRef, "GameSession")).key;
let key = newKey.substring(1);

function writeUserData(userId) {
  set(ref(database, "users/" + userId), {
    username: "JohnDoe",
  });
}

//Code for update()

function updateUserData(userId) {
  const db = getDatabase();
  update(ref(db, "users/" + userId), {
    username: "JohnDoe",
  });
}
</script>

<style scoped></style>
