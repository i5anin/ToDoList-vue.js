<template>
  <div>
    <ul>
      <strong>
        <div class="row tableHeader">
          <div class="col s1">#</div>
          <div class="col s6">Название</div>
          <div class="col s2">Тег</div>
          <div class="col s2">Примечание</div>
        </div>
      </strong>
      <hr />

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
.tableHeader {
  font-size: 105%;
}
</style>
