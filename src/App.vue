<template>
  <div id="app">
    <Navbar />
    <div class="row">
      <div class="col offset-s3 offset-m3 s6 m6 l12 center">
        <h2 class="while">ToDoList MONEY WAY</h2>
        <router-view />
        <hr />
        <LowerVacation />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import LowerVacation from "@/views/LowerVacation";
export default { components: { Navbar, LowerVacation } };
</script>

<style></style>
