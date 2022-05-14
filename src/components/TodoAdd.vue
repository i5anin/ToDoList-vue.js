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
          type="date"
          placeholder="Дата поступления..."
          v-model="formData.date"
        />
        <input
          type="text"
          placeholder="Описание дохода..."
          v-model="formData.desc"
        />
        <input
          type="number"
          placeholder="Значение дохода..."
          v-model="formData.value"
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
      desc: null,
      value: null,
      date: null,
    });

    function FormHandler() {
      emit("add-income", {
        desc: formData.desc,
        value: formData.value,
        date: formData.date,
      });

      formData.desc = null;
      formData.value = null;
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
