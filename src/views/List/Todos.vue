// Фильтр и навигация
<template>
  <!-- скопировано 38:19 -->
  <div>
    <h5>Приложение Todo</h5>
    <router-view />
    <!--    todo переместить в шапку-->
    <!--    <router-link to="/">Вернуться на главную стравницу (Home)</router-link>-->
    <!--    <hr />-->
    <AddTodo @add-todo="addTodo" />

    <!-- Фильтр: -->
    <select class="select" v-model="filter">
      <option value="all">Все</option>
      <option value="completed">Завершены</option>
      <option value="not-completed">Не завершены</option>
    </select>

    <Loader class="loader" v-if="loading" />
    <TodoList
      v-else-if="todos.length"
      :todos="todos"
      @remove-todo="removeTodo"
    />
    <p v-else>Нет задач</p>
  </div>
</template>

<script>
//import? скопировано 37:56
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";

//???
export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all",
    };
  },

  //Данные с сервера:
  mounted() {
    fetch("//jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
          //исскуственная задержка сервера:
        }, 1555);
      });
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
};
</script>

<style>
.select {
  display: block;
  background: rgb(43, 43, 43);
  border-color: rgb(43, 43, 43);
  color: white;
}

.loader {
  top: 0;
}
</style>
