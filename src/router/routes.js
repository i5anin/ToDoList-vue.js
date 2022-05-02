import Home from "@/views/Home/Home";
import Login from "@/views/Login/Login";
import Todos from "@/views/List/Todos";
import Create from "@/views/Create";
import Task from "@/views/Task";
/*import authGuard from "@/router/auth-guard";*/

export const ROUTES = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Авторизация",
    component: Login,
  },
  {
    path: "/todos", //регистрация пути 37:19 (Home переводит на todos)
    name: "Todos",
    component: Todos,
    beforeEnter: (to, from) => {
      // if (from.query.isAuth == null || from.query.isAuth === false) {
      //   return { path: "/login", query: {}, hash: to.hash };
      // }
      return true;
    },

    //динамический иморт 37:40
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
    beforeEnter: (to, from) => {
      if (from.query.isAuth == null || from.query.isAuth === false) {
        return { path: "/login", query: {}, hash: to.hash };
      }
      return true;
    },
  },
  {
    path: "/task/:id",
    name: "task",
    component: Task,
    beforeEnter: (to, from) => {
      if (from.query.isAuth == null || from.query.isAuth === false) {
        return { path: "/login", query: {}, hash: to.hash };
      }
      return true;
    },
  },
];

export const NOT_AUTH_ROUTES = [
  {
    path: "/login", //главная страница
    name: "Авторизация",
    component: Login, //домашняя страница 36:25
  },
];

export const AUTH_ROUTES = [
  {
    path: "/todos", //регистрация пути 37:19 (Home переводит на todos)
    name: "Todos",
    component: Todos, //динамический иморт 37:40
  },
  {
    path: "/create", //страница create в router
    name: "Create",
    component: Create,
  },
  {
    path: "/task/:id", //страница create в router
    name: "task",
    component: Task,
  },
];
