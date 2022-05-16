<template>
  <h2>Войти</h2>
  <div class="container">
    <div class="container">
      <div class="container">
        <input type="text" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Пароль" v-model="password" />
        <p v-if="errMsg">{{ errMsg }}</p>
        <button class="waves-effect waves-light btn" @click="signIn">
          Войти
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "vue-router"; // импорт маршрутизатора
const email = ref("");
const password = ref("");
const errMsg = ref(); // СООБЩЕНИЕ ОБ ОШИБКЕ
const router = useRouter(); // получить ссылку на наш маршрутизатор vue
const signIn = () => {
  signInWithEmailAndPassword(auth, email.value, password.value) // ЭТА СТРОКА ИЗМЕНЕНА
    .then((data) => {
      console.log("Успешно вошёл в систему!");
      router.push("/todos"); // перенаправление на канал
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Неверный адрес электронной почты";
          break;
        case "auth/user-not-found":
          errMsg.value =
            "Учетная запись с этим адресом электронной почты найдена не была";
          break;
        case "auth/wrong-password":
          errMsg.value = "Неверный пароль";
          break;
        default:
          errMsg.value = "Адрес электронной почты или пароль были неверны";
          break;
      }
    });
};
</script>
