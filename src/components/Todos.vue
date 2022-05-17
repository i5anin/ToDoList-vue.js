// Фильтр и навигация
<template>
  <div>
    <h5>Добавить задачу</h5>
    <router-view />
    <TodoAdd />

    <!-- Фильтр: -->
    <h6>Список задач</h6>
    <div class="container">
      <select class="select" v-model="filter">
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
      filter: "not-completed",
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
.select {
  display: block;
}
</style>
