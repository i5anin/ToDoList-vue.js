<template>
  <nav class="#0d7569 teal darken-1">
    <!-- Green цвет Nav бара-->
    <div class="nav-wrapper">
      <router-link to="/">
        <img src="../png/to-do.png" width="77" height="77"
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
        <button
          class="waves-effect waves-light btn"
          type="submit"
          v-if="isAuth"
          @click="logout"
        >
          Выйти
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { AUTH_ROUTES, NOT_AUTH_ROUTES } from "../views/Auth/routes";
import { useRouter } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
// const router = useRouter();

export default {
  data: () => ({
    isAuth: false,
  }),
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isAuth = true;
      }
    });
  },
  computed: {
    filteredRoutes() {
      return this.isAuth ? AUTH_ROUTES : NOT_AUTH_ROUTES; //IF ELSE
    },
  },
  methods: {
    logout() {
      signOut(auth).then(() => {
        const router = useRouter();
        // todo: error не отрабатывает push
        setTimeout(() => {
          console.log("Выход из системы");
          router.push("/home");
          // исскуственная задержка:
        }, 3000);
      });
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

.btn {
  top: 13px;
  background-color: #ffffff !important;
  color: #000;
}
</style>
