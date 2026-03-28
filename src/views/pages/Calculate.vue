<template>
  <section class="min-h-screen p-10 text-white bg-black">

    <h2 class="mb-6 text-3xl text-lime-400">
      Cálculos Inteligentes
    </h2>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div
        v-for="item in links"
        :key="item.id"
        @click="openDialog(item)"
        class="p-4 border cursor-pointer border-lime-500 hover:bg-lime-500/20"
      >
        <h3 class="text-lime-400">{{ item.title }}</h3>
        <p class="text-sm">{{ item.description }}</p>
      </div>
    </div>

    <!-- MODAL -->
    <Dialog 
        v-model:visible="visible" modal 
        :style="{ width: '25rem' }"
        :header="selectedItem?.title">

      <component
        :is="selectedItem?.component"
        @go-dashboard="goToDashboard"
      />

    </Dialog>

  </section>
</template>

<script>
import BasalCalc from '@/components/calculations/BasalCalc.vue';
import BodyFatCalc from '@/components/calculations/BodyFatCalc.vue';
import MacroCalc from '@/components/calculations/MacroCalc.vue';
import WaterCalc from '@/components/calculations/WaterCalc.vue';

export default {
  components: {
    BasalCalc,
    BodyFatCalc,
    MacroCalc,
    WaterCalc
  },

  data() {
    return {
      visible: false,
      selectedItem: null,

      links: [
        { id: 1, title: "Metabolismo Basal", component: 'BasalCalc' },
        { id: 2, title: "Gordura Corporal", component: 'BodyFatCalc' },
        { id: 3, title: "Macronutrientes", component: 'MacroCalc' },
        { id: 4, title: "Água Diária", component: 'WaterCalc' }
      ]
    };
  },

  methods: {
    openDialog(item) {
      this.selectedItem = item;
      this.visible = true;
    },

    goToDashboard() {
      window.location.href = "/dashboard";
    }
  }
};
</script>