<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" /> <!-- атрибут v-model превращает title в модель -->
    <button type="submit">Создать TODO</button>
  </form>
</template>

<script>
export default {
  data() { // модели
    return {
      title: "", //вернуть пустое значение
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {  //если в поле title чтото есть, тогда создать обект:
        const newTodo = {       //параметры созданного TODO
          id: Date.now(),         //новый  id
          title: this.title,      //название TODO
          completed: false,       //нет смысла сразу завершать TODO
        };
        this.$emit("add-todo", newTodo); //"Пользовательские события" сообщить app компненту что у нас появился новый TODO
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
