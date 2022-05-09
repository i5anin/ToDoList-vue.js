<template>
  <div class="container">
    <div class="container">
      <h3>Создать учетную запись</h3>
      <div class="wrapper">
        <input type="text" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Пароль" v-model="password" />
        <input
          type="password"
          placeholder="Повторите пароль"
          v-model="password"
        />
        <button class="waves-effect waves-light btn" @click="register">
          Отправить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "vue-router"; // import router

//TODO добавить подтверждение почты
const email = ref("");

//TODO добавить подтверждение пароля
const password = ref("");
const password2 = ref("");
const router = useRouter(); // get a reference to our vue router
const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value) // need .value because ref()
    .then((data) => {
      console.log("Успешно зарегистрирован!");
      router.push("/todos"); // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
<style>
.wrapper {
  padding: 0 40px;
}
</style>
