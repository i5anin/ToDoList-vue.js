<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, i) in todos"
        :key="i"
        :index="i"
        :todo="todo"
        @remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
  },
};
</script>

<style scoped>
@import "~materialize-css";
</style>
