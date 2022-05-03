//Обекты внутри | HTML сегмент |
<template>
  <li>
    <span :class="{ done: todo.completed }">
      <label>
        <input
          type="checkbox"
          name=""
          @change="todo.completed = !todo.completed"
        />
      </label>
      <!-- Индекс задачи: -->
      <strong class="index">{{ index + 1 }} </strong>
      <!-- CAPS - названия | title - текст TODO -->
      {{ todo.title.toUpperCase() }}
    </span>
    <!-- TODO изменить цвет при наведении на кнопку удалить задачу: -->
    <button
      class="btn-floating btn-small waves-effect waves-teal btn-flat waves-light"
      @click="handleDelete(todo.id)"
    >
      &times;
    </button>
  </li>
  <table class="table">
    <thead></thead>
    <tbody>
      <tr>
        <th scope="row">{{ index + 1 }}</th>
        <td bgcolor="#8b0000">{{ todo.title.toUpperCase() }}</td>
        <td>Work</td>
        <!-- x-->
        <td>@Work</td>
        <!-- TODO изменить цвет при наведении на кнопку удалить задачу: -->
        <button
          class="btn-floating btn-small waves-effect waves-teal btn-flat waves-light"
          @click="handleDelete(todo.id)"
        >
          &times;
        </button>
        <!-- x-->
      </tr>
    </tbody>
  </table>
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
