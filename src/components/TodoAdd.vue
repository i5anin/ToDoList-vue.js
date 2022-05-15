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
        timeIn: this.timeIn,
        timeOut: this.timeOut,
        date: this.date,
        title: this.title,
        completed: false,
      });
      this.title = ""; //значение после ввода
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

input {
  /*padding: 20px 20px 12px !important;*/
  display: flex !important;
  /*height: 30px !important;*/
  /*border-radius: 10px !important;*/
  line-height: 1.5 !important;
  margin: 8px 8px 8px 8px !important;
}
button {
  margin: 8px 8px 8px 8px !important;
}
</style>
