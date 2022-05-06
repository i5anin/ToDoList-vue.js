<template>
  <nav class="green">
    <!-- Green цвет Nav бара-->
    <div class="nav-wrapper">
      <router-link to="/">
        <img src="../png/to-do.png" width="78" height="78"
      /></router-link>
      <div class="routes">
        <router-link
          v-for="route in filteredRoutes"
          :key="route.path"
          :to="route.path"
          exact
          active-class="active"
          >{{ route.name }}</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { AUTH_ROUTES, NOT_AUTH_ROUTES } from "../router/routes";

export default {
  data: () => ({
    isAuth: true,
  }),
  computed: {
    filteredRoutes() {
      return this.isAuth ? AUTH_ROUTES : NOT_AUTH_ROUTES;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  padding: 0 2rem;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
}

.routes {
  display: flex;
  gap: 20px;
}
</style>
