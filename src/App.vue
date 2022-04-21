//App - инициалтзация приложения
<template>
  <div id="app">
    <Navbar />
    <!-- Добавление КОМПОНЕНТА НА СТРАНИЦУ -->

    <div class="row">
      <div class="col s6 offset-s3">
        <h2>ToDoList MONEY WAY</h2>
        <!-- текст app 1 уровнь (Шапка) -->
        <router-view />
        <!-- далее app передает создание страницы router 2 уровнь -->
        <hr />
        <center>
          <a href="https://github.com/Quantum-PizZzA">GitHub</a>
        </center>

        <p align="center">Авто проекта Исанин Сергей</p>

        <center>
          <img
            class="round"
            align="center"
            style="height: auto"
            alt=""
            width="60"
            height="60"
            src="https://avatars.githubusercontent.com/u/92434473?v=4"
          />
        </center>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar },
};
</script>
