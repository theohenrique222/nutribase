<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Calculations from "./views/pages/Calculations.vue";
import Features from "./views/pages/Features.vue";
import Hero from "./views/pages/Hero.vue";

</script>
<template>
  <router-view />
  <div class="flex flex-col justify-between">
    <Navbar class="fixed top-0 z-50"/>
    <Hero/>
    <Features/>
    <Calculations/>
    <Footer class="bottom-0 w-full"/>
  </div>
</template>

<style></style>