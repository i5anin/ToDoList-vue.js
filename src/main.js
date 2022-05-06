import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "materialize-css/dist/js/materialize.min";
import "./style.css";
import firebase from "firebase/app";

createApp(App).use(router).mount("#app");
