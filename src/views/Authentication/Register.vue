<template>
  <h1>Создать учетную запись</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Пароль" v-model="password" /></p>
  <p>
    <button class="waves-effect waves-light btn" @click="register">
      Отправить
    </button>
  </p>
</template>

<script setup>
import { ref } from "vue";
import { initializeApp } from "firebase/app";
import { useRouter } from "vue-router"; // import router
const email = ref("");
const password = ref("");
const router = useRouter(); // get a reference to our vue router
const register = () => {
  firebase
    .auth() // get the auth api
    .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
    .then((data) => {
      console.log("Successfully registered!");
      router.push("/feed"); // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
