<template>
  <nav class="fixed top-0 z-50 w-full transition-all duration-300" :class="scrolled ? 'bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800/80 shadow-lg shadow-black/10' : 'bg-transparent'">
    <main class="flex items-center justify-between max-w-xs px-2 py-4 m-auto lg:max-w-6xl md:max-w-3xl sm:max-w-xl sm:px-3 lg:py-5">
      <ul class="flex items-center space-x-4">
        <li>
          <a href="/" class="text-2xl font-black tracking-tight text-white lg:text-3xl">
            <span class="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">Nutri</span>base
          </a>
        </li>
      </ul>

      <button @click="toggleMenu" class="flex text-2xl lg:hidden text-neutral-100">
        <ion-icon :name="menuOpen ? 'close' : 'menu'" class="transition-all"></ion-icon>
      </button>

      <ul class="items-center hidden space-x-8 lg:flex">
        <li v-for="item in items_menu" :key="item.id">
          <a :href="item.href" class="relative py-2 text-sm font-medium transition-colors text-neutral-400 hover:text-lime-400 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-lime-400 after:transition-all after:duration-300 hover:after:w-full">
            {{ item.name }}
          </a>
        </li>
      </ul>

      <ul class="items-center hidden space-x-4 lg:flex">
        <li v-for="social in social_icons" :key="social.id">
          <a :href="social.href"
            class="flex items-center justify-center w-9 h-9 text-sm font-bold transition-all duration-300 rounded-xl bg-neutral-800 text-neutral-400 hover:bg-lime-500/20 hover:text-lime-400 hover:-translate-y-0.5">
            <ion-icon :name="social.name"></ion-icon>
          </a>
        </li>
      </ul>
    </main>

    <div v-if="menuOpen"
      class="absolute left-0 flex flex-col items-center w-full p-6 space-y-4 transition-all duration-300 border-b lg:hidden bg-neutral-950/95 backdrop-blur-xl border-neutral-800 top-full text-neutral-100">
      <ul class="w-full space-y-1">
        <li v-for="item in items_menu" :key="item.id" class="w-full">
          <a :href="item.href" @click="menuOpen = false"
            class="block px-4 py-3 text-base font-medium transition-colors rounded-lg text-neutral-400 hover:text-lime-400 hover:bg-lime-500/5">
            {{ item.name }}
          </a>
        </li>
      </ul>

      <div class="flex gap-3 pt-4 mt-4 border-t border-neutral-800">
        <a v-for="social in social_icons" :key="social.id" :href="social.href"
          class="flex items-center justify-center w-10 h-10 text-lg transition-all rounded-xl bg-neutral-800 text-neutral-400 hover:bg-lime-500/20 hover:text-lime-400">
          <ion-icon :name="social.name"></ion-icon>
        </a>
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
      scrolled: false,
      items_menu: [
        { id: 1, name: "Início", href: '#hero' },
        { id: 2, name: "Funcionalidades", href: '#features' },
        { id: 3, name: "Calculadora", href: '#calculations' },
        { id: 4, name: "Contate-me", href: '#formulario' },
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
    },
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
