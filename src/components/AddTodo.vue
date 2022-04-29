<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <!-- атрибут v-model превращает title в модель -->
    <button class="waves-effect waves-light btn" type="submit">
      Создать TODO
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "", //вернуть пустое значение
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        //Создание нового TO DO если в поле title чтото есть, тогда создать обект:
        const newTodo = {
          //параметры созданного TO DO
          id: Date.now(), //новый  id
          title: this.title, //название TO DO
          completed: false, //нет смысла сразу завершать TO DO
        };
        this.$emit("add-todo", newTodo); //"Пользовательские события" сообщить app компненту что у нас появился новый TO DO
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input {
  width: 400px;
}
</style>
