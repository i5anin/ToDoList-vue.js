// Фильтр и навигация
<template>
  <div>
    <h5>Список задач</h5>
    <router-view />
    <TodoAdd />

    <!-- Фильтр: -->
    <div class="container">
      <select class="select" v-model="filter">
        <option value="all">Все задачи</option>
        <option value="completed">Завершенные</option>
        <option value="not-completed">Не завершенные</option>
      </select>
    </div>

    <TodoList :todos="todos" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoAdd from "@/components/TodoAdd.vue";

export default {
  //значения по умолчанию:
  name: "App",
  data() {
    return {
      filter: "all",
    };
  },
  //создание:

  components: {
    TodoList,
    TodoAdd,
  },
};
</script>

<style>
.loader {
  top: 0;
}
</style>
