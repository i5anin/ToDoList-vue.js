import Vue from "vue"; //35:22 Начало
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home";
import Todos from "@/views/Todos";



const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes: [
    {
      path: "/", //главная страница
      component: Home, //домашняя страница 36:25
    },
    {
      path: "/todos", //регистрация пути 37:19
      component: Todos, //динамический иморт 37:40
    },
  ],
});
export default router;
