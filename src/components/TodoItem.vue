//Обекты внутри | HTML сегмент |
<template>
  <div class="row tab">
    <div class="col s1">{{ index + 1 }}</div>
    <div class="col s2">0:00</div>
    <div align="left" class="col s6">{{ todo.title.toUpperCase() }}</div>
    <div class="col s2">Тег</div>

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

.tab {
  /*border: 1px solid #2b2b2b; !* обводка item *!*/
  display: flex;
  justify-content: space-between; /* расположение по краям */
  padding: 0.5rem 2rem; /* Применяется для всех 4 сторон */
  margin-bottom: 1rem;
}

input {
  margin-right: 1rem; /* отступ справа */
}
</style>
