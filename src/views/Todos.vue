<template> <!-- скопировано 38:19 -->
  <div>
    <h2>Todo application</h2>
    <hr>
    <router-view />
    <router-link to="/">Home</router-link>
    <hr>


    <AddTodo
        @add-todo="addTodo"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <hr>
<!--    <Loader v-if="loading" />-->
    <TodoList
        v-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script> //скопировано 37:56
  import TodoList from "@/components/TodoList";
  import AddTodo from "@/components/AddTodo";
  export default {
    name: "App",
    data() {
      return {
        todos: [],
      };
    },
    mounted() { //данные с сервера
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
              .then(response => response.json())
              .then(json => {
                this.todos = json
              })
    },
    methods: {
      removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
      },
      addTodo(todo) {
        this.todos.push(todo);
      },
    },
    components: {
      TodoList,
      AddTodo, //реализация AddTodo
    },
  };
</script>