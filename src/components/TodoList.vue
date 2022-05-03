<template>
  <div>
    <ul>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Last</th>
            <th scope="col">Тип</th>
          </tr>
        </thead>
      </table>
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
@import "../../node_modules/materialize-css";
</style>
