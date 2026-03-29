<script setup>

</script>
<template>
  <div>
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
    
    <TemplatesPage>
      <slot />
    </TemplatesPage>
    
  </div>
</template>
