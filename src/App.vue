<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

</script>
<template>
  <div>
    <Navbar/>
    <router-view/>
    <Footer class="bottom-0"/>
  </div>
</template>

<style>

</style>