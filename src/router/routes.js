import Home from "@/views/Page/Home";
import Login from "@/views/Page/Login";
import Todos from "@/components/Todo-Filter-Output";
import Register from "@/views/Authentication/Register";
import SignIn from "@/views/Authentication/SignIn";

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
    path: "/sign-in",
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
    path: "/sign-in",
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
];
