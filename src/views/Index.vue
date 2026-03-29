<template>
  <Hero/>
  <Features/>
  <Calculations/>
  <Atributes/>
  <Price/>
  <Contact/>
</template>

<script>
import Atributes from './pages/Atributes.vue';
import Calculations from './pages/Calculations.vue';
import Contact from './pages/Contact.vue';
import Features from './pages/Features.vue';
import Hero from './pages/Hero.vue';
import Price from './pages/Price.vue';


export default {
    components: {
        Hero,
        Features,
        Calculations,
        Contact,
        Price,
        Atributes,
    }
}
</script>

<style>

</style>