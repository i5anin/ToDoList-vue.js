// List
<template>
  <div>
    <h1 class="while">Лист</h1>
    <hr />

    <table v-if="tasks.length"></table>
    <p v-else class="while">No tasks</p>
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
