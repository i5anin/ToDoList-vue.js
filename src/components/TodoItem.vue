<template>
  <bg>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed" />
      <strong>{{ index + 1 }}</strong>
      {{ todo.title.toUpperCase() }} <!-- CAPS - названия | реализовать ucFirst - первая буква всегда заглавная -->
    </span>
    <button class="rm"
            v-on:click="$emit('remove-todo', todo.id)"
    >&times;</button>
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
  }
</script>

<style scoped>
bg{
    background: #2c3e50;
  }


li {
  border: 1px solid #bababa; /* обводка item */
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
.rm {  /* кнопка закрыть */
  background: #ffffff;
  color: #000000;
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
