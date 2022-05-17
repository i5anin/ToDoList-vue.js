<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="col s12 m4 l8 center">
        <router-view />
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

<style>
@import "../node_modules/materialize-css";
</style>
