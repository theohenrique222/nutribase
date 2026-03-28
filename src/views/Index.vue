<template>
  <Hero/>
  <Features/>
  <Calculations/>
  <Contact/>
</template>

<script>
import Calculations from './pages/Calculations.vue';
import Contact from './pages/Contact.vue';
import Features from './pages/Features.vue';
import Hero from './pages/Hero.vue';


export default {
    components: {
        Hero,
        Features,
        Calculations,
        Contact,
    }
}
</script>

<style>

</style>