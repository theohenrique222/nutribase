<template>
  <nav class="fixed top-0 z-50 w-full border-b backdrop-blur-sm border-b-neutral-100/20">
    <main class="flex items-center justify-between max-w-xs px-2 py-3 m-auto lg:max-w-6xl md:max-w-3xl sm:max-w-xl sm:px-3 lg:py-5">
      <ul class="flex items-center space-x-4 text-2xl font-bold text-neutral-100 lg:text-3xl">
        <li>
          <a href="/">
            Nutribase
          </a>
        </li>
      </ul>

      <button @click="toggleMenu" class="flex text-3xl lg:hidden text-neutral-100">
        <ion-icon :name="menuOpen ? 'close' : 'menu'" class="transition-all"></ion-icon>
      </button>

      <ul class="items-center hidden space-x-6 lg:flex text-neutral-100">
        <li v-for="item in items_menu" :key="item.id">
          <a :href="item.href" class="py-5 text-sm transition-all hover:border-b-4 border-neutral-200">
            {{ item.name }}
          </a>
        </li>
      </ul>
      
      <ul class="items-center hidden space-x-6 lg:flex">
        <li v-for="social in social_icons" :key="social.id">
          <a :href="social.href"
            class="flex p-2 text-sm font-extrabold transition-all rounded-full bg-neutral-100 text-neutral-900 hover:bg-neutral-700 hover:text-neutral-100 hover:-translate-y-1">
            <ion-icon :name="social.name"></ion-icon>
          </a>
        </li>
      </ul>
    </main>

    <div v-if="menuOpen"
      class="absolute left-0 flex flex-col items-center w-full p-5 space-y-4 transition-all duration-300 lg:hidden top-16 bg-neutral-800/80 backdrop-blur-sm text-neutral-100">

      <ul class="w-full text-center">
        <li v-for="item in items_menu" :key="item.id" class="w-full p-2 border-b border-neutral-500">
          <a :href="item.href" class="block py-2 text-lg">{{ item.name }}</a>
        </li>
      </ul>

      <div class="flex p-2 space-x-4">
        <ul class="flex space-x-4">
          <li v-for="social in social_icons" :key="social.id">
            <a :href="social.href"
              class="flex p-2 text-xl font-extrabold transition-all rounded-full bg-neutral-100 text-neutral-900 hover:bg-neutral-700 hover:text-neutral-100">
              <ion-icon :name="social.name"></ion-icon>
            </a>
          </li>
        </ul>
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
        { 
          id:   1, 
          name: "Início", 
          href: '#hero' },
        { 
          id:   2, 
          name: "Funcionalidades", 
          href: '#features' 
        },
        { 
          id:   3, 
          name: "Calculadora", 
          href: '#calculations' 
        },
        { 
          id:   4, 
          name: "Contate-me", 
          href: '#formulario' 
        },
      ],
      social_icons: [
        { 
          id:   1, 
          name: 'logo-instagram', 
          href: '/instagram' 
        },
        { 
          id:   2, 
          name: 'logo-whatsapp', 
          href: '' 
        },
        { 
          id:   3, 
          name: 'logo-twitter', 
          href: '' 
        },
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      console.log("Menu aberto?", this.menuOpen);
    }
  }
};
</script>
