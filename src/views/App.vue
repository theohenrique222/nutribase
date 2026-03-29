<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Hero from "./pages/Hero.vue";
import Features from "./pages/Features.vue";
import Contact from "./pages/Contact.vue";
import Calculations from "./pages/Calculations.vue";
import Calculate from "./pages/Calculate.vue";

</script>
<template>
  <div>
    <!-- <Navbar/> -->
    <div>
      <VuePreloader 
        background-color="#232425" 
        color="#ffffff" 
        transition-type="fade-up" 
        :loading-speed="25"
        :transition-speed="1400" 
        @loading-is-over="loadingIsOver" 
        @transition-is-over="transitionIsOver">
      </VuePreloader>
    </div>

    <router-view />
    <!-- <Hero/>
    <Features/>
    <Calculations/>
    <Contact/> -->
    <TemplatesPage>
      <slot />
    </TemplatesPage>
    <!-- <Footer/> -->
  </div>
</template>
