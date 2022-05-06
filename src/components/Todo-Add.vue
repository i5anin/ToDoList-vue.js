<template>
  <div class="container">
    <div class="col s12 m4 l8">
      <!-- событие submit больше не будет перезагружать страницу -->
      <form @submit.prevent="onSubmit">
        <!-- атрибут v-model превращает title в модель -->
        <input
          placeholder="Текст задачи"
          class="form-control"
          type="text"
          v-model="title"
        />
        <!--  кнопка создания нового TO DO-->
        <button class="waves-effect waves-light btn" type="submit">
          Создать
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //вернуть пустое значение
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        //Создание нового TO DO если в поле title чтото есть, тогда создать обект:
        const newTodo = {
          //параметры созданного TO DO:
          id: Date.now(), //новый  id
          title: this.title, //название TO DO
          completed: false, //нет смысла сразу завершать TO DO
        };
        this.$emit("add-todo", newTodo); //"Пользовательские события" сообщить app компненту что у нас появился новый TO DO
        this.title = ""; //значение посе ввода
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex; /* расположение поля для создания */
}

input {
  width: 400px; /* ??? */
}
</style>
