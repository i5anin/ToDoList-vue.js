import Home from "@/views/Page/Home";
import Login from "@/views/Page/Login";
import Todos from "@/components/Todo-Filter-Output";
import Task from "@/views/delete/Task";
import Register from "@/views/Authentication/Register";
import SignIn from "@/views/Authentication/SignIn";
import Test from "@/views/delete/Test"; //DELETE
// import Create from "@/views/Page/Create";

/*import authGuard from "@/router/auth-guard";*/

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
    path: "/test",
    name: "Логин",
    component: Test, //DELETE
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
    // beforeEnter: (to, from) => {
    //   // if (from.query.isAuth == null || from.query.isAuth === false) {
    //   //   return { path: "/login", query: {}, hash: to.hash };
    //   // }
    //   return true;
    // },
  },
  // {
  //   path: "/create",
  //   name: "Create",
  //   component: Create,
  //   beforeEnter: (to, from) => {
  //     if (from.query.isAuth == null || from.query.isAuth === false) {
  //       return { path: "/login", query: {}, hash: to.hash };
  //     }
  //     return true;
  //   },
  // },
  // {
  //   path: "/task/:id",
  //   name: "task",
  //   component: Task,
  //   beforeEnter: (to, from) => {
  //     if (from.query.isAuth == null || from.query.isAuth === false) {
  //       return { path: "/login", query: {}, hash: to.hash };
  //     }
  //     return true;
  //   },
  // },
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
