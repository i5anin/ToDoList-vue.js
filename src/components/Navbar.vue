//бар сверху
<template>
  <nav class="green">
    <!-- Green цвет Nav бара-->
    <span class="nav-wrapper">
      <router-link to="/" class="brand-logo">Логотип</router-link>

      <ul class="right hide-on-med-and-down">
        <li>
          <!-- <li> продолжает на той же строке -->
          <router-link tag="li" to="/create" exact active-class="active"
            ><a href="#">Создать</a></router-link
          >
        </li>
        <li>
          <router-link tag="li" to="/list" exact active-class="active"
            ><a href="#">Лист</a></router-link
          >
        </li>
      </ul>
    </span>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  padding: 0 2rem;
}
</style>
