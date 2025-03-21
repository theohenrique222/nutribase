<template>
  <nav class="bg-neutral-800 w-full">
    <main class="flex justify-between max-w-6xl m-auto py-4 items-center">
      <ul class="flex items-center space-x-4 text-white font-bold text-lg">
        <li><a href="/" class="">Nutribase</a></li>
      </ul>
      <ul class="flex items-center space-x-6 text-white">
        <li v-for="item in items_menu" :key="item.id">
          <a :href="item.href" class="hover:underline">{{ item.name }}</a>
        </li>
      </ul>
    </main>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      items_menu: [
        { id: 1, name: "Metabolismo Basal", href:'/basal_metabolism'},
        { id: 3, name: "Gordura Corporal",  href:'/bodyfat'},
        { id: 2, name: "Cálculo de Água",   href:'/water_intake'},
        { id: 3, name: "Macronutrientes",   href:'/macronutrients'},
      ],
    };
  },
};
</script>
