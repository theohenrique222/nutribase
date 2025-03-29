<template>
  <nav class="bg-neutral-800/10 backdrop-blur-sm w-full">
    <main class="flex justify-between lg:max-w-6xl md:max-w-3xl sm:max-w-xl max-w-xs m-auto px-2 sm:px-3 py-5 items-center">
      <ul class="flex items-center space-x-4 text-neutral-100 font-bold lg:text-3xl text-2xl">
        <li><a href="/">Nutribase</a></li>
      </ul>

      <!-- Botão Hamburger -->
      <button @click="toggleMenu" class="lg:hidden text-neutral-100 text-3xl">
        <ion-icon :name="menuOpen ? 'close' : 'menu'" class="transition-all"></ion-icon>
      </button>

      <!-- Menu Desktop -->
      <ul class="hidden lg:flex items-center space-x-6 text-neutral-100">
        <li v-for="item in items_menu" :key="item.id">
          <a :href="item.href" class="py-5 transition-all hover:border-b-4 border-neutral-200 text-sm">{{ item.name
          }}</a>
        </li>
      </ul>
      <ul class="hidden lg:flex items-center space-x-6">
        <li v-for="social in social_icons" :key="social.id">
          <a :href="social.href"
            class="flex text-sm p-2 rounded-full bg-neutral-100 text-neutral-900 font-extrabold hover:bg-neutral-700 hover:text-neutral-100 hover:-translate-y-1 transition-all">
            <ion-icon :name="social.name"></ion-icon>
          </a>
        </li>
      </ul>
    </main>

    <!-- Menu Mobile -->
    <div v-if="menuOpen"
      class="lg:hidden absolute w-full bg-neutral-800/80 backdrop-blur-sm p-5 flex flex-col items-center space-y-4 text-neutral-100">
      <!-- Menu Items -->
      <li v-for="item in items_menu" :key="item.id" class="flex border-b-2 border-b-neutral-500 w-full p-2">
        <a :href="item.href" class="block py-2 text-lg text-center w-full">{{ item.name }}</a>
      </li>

      <!-- Social Icons -->
      <div class="flex space-x-4 p-2">
        <li v-for="social in social_icons" :key="social.id" class="flex">
          <a :href="social.href"
            class="flex text-xl p-2 rounded-full bg-neutral-100 text-neutral-900 font-extrabold hover:bg-neutral-700 hover:text-neutral-100 transition-all">
            <ion-icon :name="social.name"></ion-icon>
          </a>
        </li>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false,
      items_menu: [
        { id: 1, name: "Metabolismo Basal", href: '/basal_metabolism' },
        { id: 2, name: "Gordura Corporal", href: '/bodyfat' },
        { id: 3, name: "Água Diaria", href: '/water_intake' },
        { id: 4, name: "Macronutrientes", href: '/macronutrients' },
      ],
      social_icons: [
        { id: 1, name: 'logo-instagram', href: '/instagram' },
        { id: 2, name: 'logo-whatsapp', href: '' },
        { id: 3, name: 'logo-twitter', href: '' },
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style>
nav ul {
  list-style: none;
  padding: 0;
}
</style>
