//Обекты внутри | HTML сегмент |
<template>
  <div class="row">
    <div class="col s1">{{ index + 1 }}</div>
    <div align="left" class="col s6">{{ todo.title.toUpperCase() }}</div>
    <div class="col s2">Тег</div>
    <div class="col s2">Примечание</div>
    <button
      class="btn-floating btn-small waves-effect waves-teal btn-flat waves-light"
      @click="handleDelete(todo.id)"
      align="center"
    >
      &times;
    </button>
  </div>
  <!--  <hr />-->
</template>

<script>
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
    handleDelete(id) {
      // удаление задачи
      this.$emit("remove-todo", id);
    },
  },
};
</script>

<style scoped>
.index {
  margin-right: 8px;
}

li {
  border: 1px solid #e3e3e3; /* обводка item */
  display: flex;
  justify-content: space-between; /* расположение по краям */
  padding: 0.5rem 2rem; /* Применяется для всех 4 сторон */
  margin-bottom: 1rem;
}

input {
  margin-right: 1rem; /* отступ справа */
}
/* новое */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /*font-family: "poppius" б, sans-serif;*/
}

td {
  border: 2px solid darkblue;
  width: 1000px;
}
</style>
