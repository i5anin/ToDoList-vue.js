import Home from "@/views/Page/Home";
import Login from "@/views/Page/Login";
import Todos from "@/components/Todo-Filter-Output";
import Register from "@/views/Auth/Register";
import SignIn from "@/views/Auth/SignIn";
// import {auth.currentUser.uid} from "@/firebase";

export const ROUTES = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Логин",
    component: Login,
  },
  {
    path: "/register",
    name: "Регистрация",
    component: Register,
  },
  {
    path: "/signin",
    name: "Авторизация",
    component: SignIn,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
];

export const NOT_AUTH_ROUTES = [
  {
    path: "/register",
    name: "Регистрация",
    component: Register,
  },
  {
    path: "/signin",
    name: "Войти",
    component: SignIn,
  },
];

export const AUTH_ROUTES = [
  {
    path: "/todos",
    name: "Задачи",
    component: Todos,
  },
  // {
  //   path: { auth.currentUser.uid },
  //   name: { auth.currentUser.uid },
  //   component: Todos,
  // },
];
