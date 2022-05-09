// Фильтр и навигация
<template>
  <div>
    <h5>Приложение Todo</h5>
    <router-view />
    <AddTodo />

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
import { onValue, ref } from "firebase/database";
import { auth, database } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all",
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.fetchData();
      }
    });
  },
  methods: {
    fetchData() {
      const reference = ref(database, "tasks/" + auth.currentUser.uid);
      onValue(reference, (snapshot) => {
        this.todos = Object.values(snapshot.val());
        this.loading = false;
      });
    },
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
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
