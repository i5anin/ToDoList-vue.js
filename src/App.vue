<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="col s12 m4 l8 center">
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
