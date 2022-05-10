// Фильтр и навигация
<template>
  <div>
    <h5>Список задач</h5>
    <router-view />
    <TodoAdd />

    <!-- Фильтр: -->
    <div class="container">
      <div class="container">
        <div class="container">
          <select class="select" v-model="filter">
            <option value="all">Все задачи</option>
            <option value="completed">Завершенные</option>
            <option value="not-completed">Не завершенные</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Loader: -->
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
import TodoList from "@/components/TodoList";
import TodoAdd from "@/components/TodoAdd";
import Loader from "@/components/Loader";
//firebase
import { auth, database } from "@/firebase";
import { onValue, ref } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

export default {
  //значения по умолчанию:
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all",
    };
  },
  //создание:
  created() {
    //https://firebase.google.com/docs/reference/js/auth.auth#authonauthstatechanged onAuthStateChanged
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.fetchData();
      }
    });
  },
  methods: {
    //получать данные
    fetchData() {
      const reference = ref(database, "tasks/" + auth.currentUser.uid);
      onValue(reference, (snapshot) => {
        this.todos = Object.values(snapshot.val());
        this.loading = false;
      });
    },
    //удалить To do
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
  },
  components: {
    TodoList,
    TodoAdd,
    Loader,
  },
};
</script>

<style>
.loader {
  top: 0;
}
</style>
