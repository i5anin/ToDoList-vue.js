//Обекты внутри | HTML сегмент |
<template>
  <bg>
    <li>
      <span v-bind:class="{ done: todo.completed }">
        <input type="checkbox" v-on:change="todo.completed = !todo.completed" />
        <!-- Индекс задачи: убрать пробелы &nbsp; -->
        <strong>{{ index + 1 }}&nbsp;&nbsp; </strong>
        <!-- CAPS - названия | реализовать ucFirst - первая буква всегда заглавная -->
        <!-- title - текст TODO -->
        {{ todo.title.toUpperCase() }}
      </span>
      <!-- изменить цвет при наведении на кнопку удалить задачу: -->
      <button
        class="btn-floating btn-small waves-effect waves-teal btn-flat waves-light"
        v-on:click="$emit('remove-todo', todo.id)"
      >
        &times;
      </button>
    </li>
  </bg>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
};
</script>

<style scoped>
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
  border: 1 px solid #c7c7c7;
  font-weight: bold;
}

input {
  margin-right: 1rem; /* ??? */
}

.done {
  text-decoration: line-through; /* ??? */
}
</style>
