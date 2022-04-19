<template>
  <div id="app">
    <Navbar /> <!-- Добавление КОМПОНЕНТА НА СТРАНИЦУ -->
    <h1>ToDoList MONEY WAY</h1> <!-- текст app 1 уровнь (Шапка) -->
    <hr>
    <router-view /> <!-- далее app передает создание страницы router 2 уровнь -->
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  export default {
    components: {Navbar}
  }
</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css"; //подключены стили materialize.min
</style>
