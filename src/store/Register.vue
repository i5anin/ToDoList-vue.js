<template>
  <div class="container">
    <div class="container">
      <h4>Создать учетную запись</h4>
      <div class="wrapper">
        <input type="text" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Пароль" v-model="password" />
        <input
          type="password"
          placeholder="Повторите пароль"
          v-model="password2"
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
import { useRouter } from "vue-router";

//TODO добавить подтверждение почты
const email = ref("");

const password = ref("");
const password2 = ref("");
const router = useRouter(); // получить ссылку на наш маршрутизатор vue
const register = () => {
  if (password.value == password2.value) {
    createUserWithEmailAndPassword(auth, email.value, password.value) // нужно значение, потому что ref()
      .then((data) => {
        console.log("Успешно зарегистрирован!");
        router.push("/todos"); // перенаправление на канал
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  } else {
    alert("Пароли не совпадают!");
  }
};
</script>
<style scoped>
.wrapper {
  padding: 0 40px;
  margin: 30px !important;
}
input,
button {
  margin: 12px !important;
}
</style>
