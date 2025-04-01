<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

</script>
<template>
  <div class="flex flex-col justify-between">
    <Navbar class="fixed top-0 z-50"/>
    <div>
      <TemplatesHeader />
      <TemplatesPage>
        <slot />
      </TemplatesPage>
      <TemplatesFooter />
      <VuePreloader
        background-color="#091a28"
        color="#ffffff"
        transition-type="fade-up"
        :loading-speed="25"
        :transition-speed="1400"
        @loading-is-over="loadingIsOver"
        @transition-is-over="transitionIsOver"
      ></VuePreloader>
    </div>
    <router-view/>
    <Footer class="bottom-0 w-full"/>
  </div>
</template>

<style></style>