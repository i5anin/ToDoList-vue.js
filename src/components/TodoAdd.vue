<template>
  <div class="container">
    <div class="col s12 m4 l8">
      <!-- событие submit больше не будет перезагружать страницу -->
      <input
        v-model="title"
        placeholder="Текст задачи"
        class="form-control"
        type="text"
      />
      <button class="waves-effect waves-light btn" type="submit">
        Создать<i class="material-icons right">send</i>
      </button>
      <form @submit.prevent="onSubmit">
        <!-- атрибут v-model превращает title в модель -->
        <input
          type="time"
          placeholder="Время входа"
          v-model="formData.timeIn"
        />
        <input
          type="time"
          placeholder="Время выхода"
          v-model="formData.timeOut"
        />

        <input
          type="date"
          placeholder="Дата поступления..."
          v-model="formData.date"
        />
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
