<template>
  <div class="container">
    <div>
      <input v-model="title" type="text" placeholder="Текст задачи" />
      <form>
        <input v-model="formData.timeIn" type="time" placeholder="Время IN" />
        <input v-model="formData.timeOut" type="time" placeholder="Время OUT" />
        <input v-model="formData.date" type="date" placeholder="Дата" />
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
import { reactive } from "vue";
export default {
  setup(props, { emit }) {
    const formData = reactive({
      timeIn: null,
      timeOut: null,
      date: null,
    });

    function FormHandler() {
      emit("add-income", {
        timeIn: formData.timeIn,
        timeOut: formData.timeOut,
        date: formData.date,
      });

      formData.timeIn = null;
      formData.timeOut = null;
      formData.date = null;
    }

    // Return template data
    return {
      FormHandler,
      formData,
    };
  },
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
        timeIn: this.formData.timeIn,
        timeOut: this.formData.timeOut,
        date: this.formData.date,
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
