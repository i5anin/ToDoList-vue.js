<template>
  <div class="container">
    <div class="col s12 m4 l8">
      <!-- событие submit больше не будет перезагружать страницу -->
      <form @submit.prevent="onSubmit">
        <!-- атрибут v-model превращает title в модель -->
        <input
          v-model="title"
          placeholder="Текст задачи"
          class="form-control"
          type="text"
        />
        <!--  кнопка создания нового TO DO-->
        <button class="waves-effect waves-light btn" type="submit">
          Создать<i class="material-icons right">send</i>
        </button>
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
    };
  },
  //передача данных в БД
  methods: {
    onSubmit() {
      push(ref(database, "tasks/" + auth.currentUser.uid), {
        title: this.title,
        completed: false,
      });
      this.title = ""; //значение после ввода
    },
  },
};
</script>

<style scoped>
form {
  display: flex; /* расположение поля для создания */
}

/*input {*/
/*  width: 400px; !* ??? *!*/
/*}*/
</style>
