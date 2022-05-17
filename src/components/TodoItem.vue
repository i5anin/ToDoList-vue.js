//Обекты внутри | HTML сегмент |
<template>
  <div class="row item">
    <div class="col s1" align="left">{{ index + 1 }}</div>
    <div class="col s2">{{ todo.timeIn.toUpperCase() }}</div>
    <div class="col s2">{{ todo.timeOut.toUpperCase() }}</div>
    <div class="col s5" align="left">{{ todo.title.toUpperCase() }}</div>
    <div class="col s2">
      {{ new Date(todo.date.toUpperCase()).toLocaleDateString() }}
    </div>
    <div class="col s1">
      <button
        class="btn-floating btn-small waves-effect waves-teal btn-flat waves-light"
        @click="EditTodo(todo.id)"
        align="center"
      >
        EDIT
      </button>
    </div>
    <div class="col s1">
      <button
        class="btn-floating btn-small waves-effect waves-teal btn-flat waves-light"
        @click="handleDeleteTodo(todo.id)"
        align="center"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script>
import { ref, remove } from "firebase/database";
import { auth, database } from "@/firebase";

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    handleDeleteTodo(id) {
      // удаление задачи
      remove(ref(database, "tasks/" + auth.currentUser.uid + "/" + id));
    },
  },
};
</script>

<style scoped>
div {
  /*margin: 4px 4px 4px 4px !important;*/
}
.item {
  display: flex;

  border-radius: 10em;
  justify-content: space-between; /* расположение по краям */
  padding: 0.5rem 2rem; /* Применяется для всех 4 сторон */
  margin-bottom: 1rem;
  align-items: center;
  font-size: 16px;

  background: var(--gray2);
}
</style>
