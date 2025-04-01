<template>
  <Hero/>
  <Features/>
  <Calculations/>
</template>

<script>
import Calculations from './pages/Calculations.vue';
import Features from './pages/Features.vue';
import Hero from './pages/Hero.vue';

export default {
    components: {
        Hero,
        Features,
        Calculations,
    }
}
</script>

<style>

</style>