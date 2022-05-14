<template>
  <div>
    <ul>
      <strong>
        <div class="row tabH tableHeader">
          <div class="col s1" align="left">#</div>
          <div class="col s2">Время</div>
          <div class="col s6">Название</div>
          <div class="col s2">Дата</div>
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
  font-size: 101%;
}
.tabH {
  display: flex;
  justify-content: space-between; /* расположение по краям */
  padding: 0.5rem 2rem; /* Применяется для всех 4 сторон */
  margin-bottom: 1rem;
}
</style>
