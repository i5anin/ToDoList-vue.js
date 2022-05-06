// Фильтр и навигация
<template>
  <div>
    <h5>Приложение Todo</h5>
    <router-view />
    <AddTodo @add-todo="addTodo" />

    <!-- Фильтр: -->
    <div class="container">
      <div class="container">
        <div class="container">
          <select class="select" v-model="filter">
            <option value="all">Все</option>
            <option value="completed">Завершенные</option>
            <option value="not-completed">Не завершенные</option>
          </select>
        </div>
      </div>
    </div>

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
import TodoList from "@/components/Todo-List";
import AddTodo from "@/components/Todo-Add";
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
        }, 555);
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
.loader {
  top: 0;
}
</style>
