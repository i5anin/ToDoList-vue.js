<template>
  <div>
    <h3>{{ hometitle }}</h3>
    <div>
      <router-link to="/signin">
        <button class="waves-effect waves-light btn-large" @click="register">
          Войти
        </button>
      </router-link>
      <h6>или</h6>
      <router-link to="/register">
        <button
          class="waves-effect waves-light btn-small disabled"
          @click="register"
        >
          Зарегистрироваться
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    hometitle: "Добро пожаловать в ToDoList", //Добро пожаловать в мой ToDoList v0.0.1
    count: 0,
  }),
  created() {
    this.sum();
  },
  watch: {
    title(value) {
      console.log("new title: ", value);
    },
  },
  computed: {
    tasksLength() {
      return "Кол-во задач: " + this.count;
    },
  },
  methods: {
    sum() {},
    changeTitle() {
      this.hometitle += " Новый заголовок";
    },
    changeCount() {
      this.count++;
    },
  },
};
</script>

<style scoped></style>
