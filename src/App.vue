<template>
  <div id="app">
    <Navbar /> <!-- Добавление КОМПОНЕНТА НА СТРАНИЦУ -->
    <div class="row">
      <div class="col s6 offset-s3">
        <h2>ToDoList MONEY WAY</h2> <!-- текст app 1 уровнь (Шапка) -->

        <router-view /> <!-- далее app передает создание страницы router 2 уровнь -->
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  export default {
    components: {Navbar}
  }
</script>
