import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";

Vue.use(Router); // роутер как плагин 35:50

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/", //главная страница
      component: Home, //домашняя страница 36:25
    },
    {
      path: "/todos", //регистрация пути 37:19
      component: () => import("./views/Todos.vue"), //динамический иморт 37:40
    },
  ],
});
