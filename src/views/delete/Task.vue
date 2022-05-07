<!--<template>-->
<!--  <div class="home">-->
<!--    <img alt="Vue logo" src="…/assets/logo.png" />-->
<!--    <div>-->
<!--      <input type="text" v-model="newTask" />-->
<!--      <button @click="addTask">Add</button>-->
<!--    </div>-->
<!--    <div v-for="item in todos" :key="item.id" @click="updateTodo(item)">-->
<!--      <input type="checkbox" />-->
<!--      <p>{{ item.body }}</p>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { db } from "@/firebase"; //../firebase/index.js-->
<!--import firebase from "firebase";-->
<!--export default {-->
<!--  name: "Home",-->
<!--  data() {-->
<!--    return {-->
<!--      todos: [],-->
<!--      newTask: "",-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    addTask: function () {-->
<!--      db.collection("todos").add({-->
<!--        body: this.newTask,-->
<!--        completed: false,-->
<!--        createdAt: firebase.firestore.FieldValue.serverTimestamp(),-->
<!--      });-->
<!--    },-->
<!--    updateTodo: function (item) {-->
<!--      db.collection("todos")-->
<!--        .doc(item.id)-->
<!--        .update({-->
<!--          completed: (item.completed = !item.completed),-->
<!--        });-->
<!--    },-->
<!--  },-->
<!--  firestone() {-->
<!--    return {-->
<!--      todos: db.collection("todos").orderBy("createdate", "desc"),-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->
