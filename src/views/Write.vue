<template></template>

<script>
export default {
  name: "Write",
};

//Code to generate key
const newKey = push(child(gameListRef, "GameSession")).key;
let key = newKey.substring(1);

//Code for set()
import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: “JohnDoe”,
});
}

//Code for update()
import { getDatabase, ref, update } from "firebase/database";

function updateUserData(userId) {
    const db = getDatabase();
    update(ref(db, 'users/' + userId), {
        username: "JohnDoe",
    });
}
</script>

<style scoped></style>
