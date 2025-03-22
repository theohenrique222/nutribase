<template>
  <nav class="bg-neutral-800/10 backdrop-blur-md w-full">
    <main class="flex justify-between max-w-6xl m-auto py-7 items-center">
      <ul class="flex items-center space-x-4 text-neutral-100 font-bold text-lg">
        <li><a href="/">Nutribase</a></li>
      </ul>
      <ul class="flex items-center space-x-6 text-neutral-200">
        <li v-for="item in items_menu" :key="item.id">
          <a :href="item.href" class="hover:underline text-xs">{{ item.name }}</a>
        </li>
      </ul>
      <ul class="flex items-center space-x-6">
        <li v-for="social in social_icons" :key="social.id">
          <a :href="social.href" class="text-sm bg-neutral-100 text-neutral-900 font-extrabold p-1 flex rounded-full"><ion-icon :name="social.name"></ion-icon></a>
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
        { id: 2, name: "Gordura Corporal",  href:'/bodyfat'},
        { id: 3, name: "Água Diaria",   href:'/water_intake'},
        { id: 4, name: "Macronutrientes",   href:'/macronutrients'},
      ],
      social_icons: [
        { id: 1, name: 'logo-instagram',    href:'/instagram' },
        { id: 2, name: 'logo-whatsapp',     href: ''},
        { id: 2, name: 'logo-twitter',     href: ''},
      ]
    };
  },
};
</script>
