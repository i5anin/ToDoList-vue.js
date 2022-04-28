//Обекты внутри | HTML сегмент |
<template>
  <li>
    <span :class="{ done: todo.completed }">
      <input type="checkbox" @change="todo.completed = !todo.completed" />
      <!-- Индекс задачи: убрать пробелы &nbsp; -->
      <strong class="index">{{ index + 1 }} </strong>
      <!-- CAPS - названия | реализовать ucFirst - первая буква всегда заглавная -->
      <!-- title - текст TODO -->
      {{ todo.title.toUpperCase() }}
    </span>
    <!-- изменить цвет при наведении на кнопку удалить задачу: -->
    <button
      class="btn-floating btn-small waves-effect waves-teal btn-flat waves-light"
      @click="handleDelete(todo.id)"
    >
      &times;
    </button>
  </li>
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
      this.$emit("remove-todo", id);
    },
  },
};
</script>

<style scoped>
.index {
  margin-right: 8px;
}
/* bg {
  background: #2c3e50;
} */

/* CSS сегмент */
li {
  border: 1px solid #e3e3e3; /* обводка item */
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
.rm {
  /* кнопка закрыть style*/
  /* background: #2c2c2c; */
  color: #ff8c00;
  border-radius: 50%;
  /*border: 1 px solid #c7c7c7;*/
  font-weight: bold;
}

input {
  margin-right: 1rem; /* ??? */
}

.done {
  text-decoration: line-through; /* ??? */
}
</style>
