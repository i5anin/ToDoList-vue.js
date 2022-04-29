<template>
  <div>
    <h1>Лист</h1>
    <hr />

    <table v-if="tasks.length"></table>
    <p v-else>No tasks</p>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>

<style lanng="scss" scoped></style>
