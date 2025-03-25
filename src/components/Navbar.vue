<template>
  <nav class="bg-neutral-800/10 backdrop-blur-sm w-full">
    <main class="flex justify-between max-w-6xl m-auto py-5 items-center">
      <ul class="flex items-center space-x-4 text-neutral-100 font-bold text-3xl">
        <li><a href="/">Nutribase</a></li>
      </ul>
      <ul class="flex items-center space-x-6 text-neutral-100">
        <li v-for="item in items_menu" :key="item.id">
          <a :href="item.href" class="py-5 transition-all hover:border-b-4 border-neutral-200 text-sm">{{ item.name }}</a>
        </li>
      </ul>
      <ul class="flex items-center space-x-6">
        <li v-for="social in social_icons" :key="social.id">
          <a :href="social.href" class="flex text-sm p-2 rounded-full bg-neutral-100 text-neutral-900 font-extrabold hover:bg-neutral-700 hover:text-neutral-100 hover:-translate-y-1 transition-all"><ion-icon :name="social.name"></ion-icon></a>
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
