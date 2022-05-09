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
import { onValue, ref, update, equalTo, query } from "firebase/database";
import { auth, database } from "@/firebase";

//???
export default {
  name: "App",
  data() {
    return {
      todos: [
        // { id: 3, title: "Купить хлеб", completed: false },
        // { id: 4, title: "Купить масло", completed: false },
        // { id: 5, title: "Купить пиво", completed: false },
      ],
      loading: true,
      filter: "all",
    };
  },

  // methods: {
  // onSubmit()
  //   {
  //     const startCountedRef = ref (database, "users/" + username);
  //     onValue(startCountedRef,(snapshot =>
  //     {
  //       const  data = snapshot.val();
  //       alert(data.title);
  //     }
  //   },

  mounted() {
    this.fetchData();
    // fetch("//jsonplaceholder.typicode.com/todos?_limit=3")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setTimeout(() => {
    //       this.todos = json;
    //       this.loading = false;
    //       console.log(json);
    //       // исскуственная задержка сервера:
    //     }, 555);
    //   });
  },
  methods: {
    fetchData() {
      const reference = query(
        ref(database, "tasks"),
        equalTo(auth.currentUser.uid, "userId")
      );
      onValue(reference, (snapshot) => {
        // this.todos = snapshot.val();
        console.log(snapshot.val());
        this.loading = false;
      });
    },
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
