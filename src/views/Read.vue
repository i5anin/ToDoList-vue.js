<template></template>

<script>
export default {
  name: "Read",
};

//Code for onValue()
import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
const starCountRef = ref(db, "posts/" + postId + "/starCount");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});

//Code for get()
import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });
</script>

<style scoped></style>
