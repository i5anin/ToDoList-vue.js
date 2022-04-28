//App - инициалтзация приложения
<template>
  <body>
    <div id="app">
      <Navbar />
      <!-- Добавление КОМПОНЕНТА НА СТРАНИЦУ -->

      <div class="row">
        <!-- -->
        <!-- внутреяяня область поля странцы ограничена -->
        <div class="col offset-s3 offset-m3 s6 m6 l12 center">
          <!-- текст app 1 уровнь (Шапка) -->
          <h2 class="while">ToDoList MONEY WAY</h2>

          <!-- далее app передает создание страницы router 2 уровнь -->
          <router-view />

          <!-- разделитель -->
          <hr />

          <!-- ссылка на Git -->
          <center>
            <a href="https://github.com/Quantum-PizZzA">GitHub</a>
          </center>

          <!-- подпись снизу страницы -->
          <p class="while" align="center">Автор проекта Исанин Сергей</p>

          <!-- аватар -->
          <center>
            <img src="https://avatars.githubusercontent.com/u/92434473?v=4" />
          </center>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
//
// бар сверху:
import Navbar from "@/components/Navbar";
export default { components: { Navbar } };
</script>

<style>
img {
  align: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
body {
  /* display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; */
  background: rgb(43, 43, 43);
}
/* Не понятно */
.while {
  /* text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 2px;
  margin-top: 20px; */
  color: #ffffff;
}
</style>
