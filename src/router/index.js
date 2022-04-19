import Vue from "vue"; //35:22 Начало
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home";
import Todos from "@/views/Todos";
import Create from "@/views/Create";



const router = createRouter({
    history: createWebHistory(),
    mode: "history",
    routes: [
        {
            path: "/", //главная страница
            name: "Home",
            component: Home, //домашняя страница 36:25
        },
        {
            path: "/todos", //регистрация пути 37:19 (Home переводит на todos)
            name: "Todos",
            component: Todos, //динамический иморт 37:40
        },
        {
            path: "/create", //страница create в router
            name: 'Create',
            component: Create,
        },
    ],
});
export default router;