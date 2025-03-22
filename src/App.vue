<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

</script>
<template>
  <div class="flex flex-col justify-between">
    <Navbar class="fixed top-0 z-50"/>
    <router-view />
    <!-- <Footer class="fixed bottom-0 w-full" /> -->
  </div>
</template>

<style></style>