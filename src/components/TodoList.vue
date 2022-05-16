<template>
  <div>
    <ul>
      <strong>
        <div class="row tabH tableHeader">
          <div class="col s1" align="left">#</div>
          <div class="col s2">Время</div>
          <div class="col s6">Название</div>
          <div class="col s2">Дата</div>
        </div>
      </strong>
      <hr />
      <!-- Loader: -->
      <Loader class="loader" v-if="loading" />
      <div v-else-if="todos.length">
        <TodoItem v-for="(todo, i) in todos" :key="i" :index="i" :todo="todo" />
      </div>
      <p v-else>Нет задач</p>
    </ul>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import TodoItem from "@/components/TodoItem";
//firebase
import { auth, database } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";

export default {
  data() {
    return {
      loading: false,
      todos: [],
    };
  },
  components: {
    TodoItem,
    Loader,
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.fetchData();
      }
    });
  },

  methods: {
    //получать данные
    fetchData() {
      this.loadind = true;
      const reference = ref(database, "tasks/" + auth.currentUser.uid);
      onValue(reference, (snapshot) => {
        this.todos = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          this.todos.push({ id: childKey, ...childData });
        });
        this.loading = false;
      });
    },
  },
};
</script>

<style scoped>
@import "../../node_modules/materialize-css";
.tableHeader {
  font-size: 15px;
  display: flex;
  justify-content: space-between; /* расположение по краям */
  padding: 0.5rem 2rem; /* Применяется для всех 4 сторон */
  margin-bottom: 1rem;
  /*background-color: #303334;*/
}

/*div {*/
/*  border-color: red !important;*/
/*}*/
</style>
