<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Calculations from "./views/pages/Calculations.vue";
import Features from "./views/pages/Features.vue";

</script>
<template>
  <div class="flex flex-col justify-between">
    <Navbar class="fixed top-0 z-50"/>
    <router-view />
    <Features/>
    <Calculations/>
    <Footer class="bottom-0 w-full"/>
  </div>
</template>

<style></style>