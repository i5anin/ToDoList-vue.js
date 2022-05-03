<template>
  <div id="app">
    <Navbar />
    <div class="row">
      <div class="col offset-s3 offset-m3 s6 m6 l12 center">
        <h3 class="while">ToDoList MONEY WAY</h3>
        <router-view />
        <hr />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/views/Footer";
export default { components: { Navbar, Footer } };
</script>

<style></style>
