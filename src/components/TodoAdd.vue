<template>
  <div class="container">
    <div>
      <input v-model="title" type="text" placeholder="Текст задачи" />
      <form>
        <input v-model="timeIn" type="time" placeholder="Время IN" />
        <input v-model="timeOut" type="time" placeholder="Время OUT" />
        <input v-model="date" type="date" placeholder="Дата" />
        <form @submit.prevent="onSubmit">
          <button class="waves-effect waves-light btn" type="submit">
            Создать
            <i class="material-icons right">send</i>
          </button>
        </form>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, set, update, push } from "firebase/database";
import { auth, database } from "@/firebase";

export default {
  //начальое значение
  data() {
    return {
      title: "",
      timeIn: "",
      timeOut: "",
      date: "",
      completed: true,
    };
  },
  //передача данных в БД
  methods: {
    onSubmit() {
      push(ref(database, "tasks/" + auth.currentUser.uid), {
        title: this.title,
        timeIn: this.timeIn,
        timeOut: this.timeOut,
        date: this.date,
        completed: false,
      });
      //значение после ввода
      this.title = "";
      this.timeIn = "";
      this.timeOut = "";
      this.date = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex; /* расположение поля для создания */
}

button,
input {
  margin: 8px 8px 8px 8px !important; /* расположение данных ввода и кнопки */
}

input {
  width: 0;
}
</style>
