<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ getSubTitle() }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "Домашняя страница", //Домашняя страница
    count: 0,
  }),
  created() {
    console.log(this.title);
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
    getSubTitle() {
      return "Добро пожаловать в ToDoList v0.0.2"; //Добро пожаловать в мой ToDoList v0.0.1
    },
    sum() {
      console.log(2 + 2);
    },
    changeTitle() {
      this.title += " Новый заголовок";
    },
    changeCount() {
      this.count++;
    },
  },
};
</script>

<style lang="css"></style>
