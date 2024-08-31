<template>
  <section class="bg-[url('/background.png')] lg:bg-cover relative w-full lg:h-screen h-full">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="container mx-auto p-6 relative z-10">
      <header class="text-center mb-6">
        <h1 class="text-4xl font-semibold text-white">Bem-vindo ao <span class="text-blue-600 font-extrabold">NUTRI BASE</span></h1>
        <p class="text-xl font-light mt-2 text-gray-100">Escolha uma opção abaixo para começar.</p>
      </header>
  
      <main class="grid grid-cols-1 gap-6 md:grid-cols-2">

        <div v-for="card in cards_form" :key="card.id" class="backdrop-blur bg-white/5 p-6 rounded-md shadow-md text-center text-white">
          <h2 class="text-2xl font-bold mb-4 uppercase">{{ card.title }}</h2>
          <p class="mb-4 font-light">{{ card.description }}</p>
          <router-link :to=card.routerTo>
            <button :class=card.class>
              {{ card.button }}
            </button>
          </router-link>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      cards_form: [
        { id: 1, 
          title: 'Cálculo de Metabolismo Basal', 
          description: 'Calcule a quantidade de calorias que seu corpo precisa para manter suas funções básicas.',
          button: 'Calcular Metabolismo Basal',
          routerTo: '/basal_metabolism',
          class: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-5 uppercase rounded-sm transition duration-300 ease-in-out hover:from-blue-600 hover:to-blue-700',
        },
        {
          id: 2,
          title: 'Cálculo de Gordura Corporal',
          description: 'Calcule a porcentagem de gordura corporal aproximada, para avaliar sua composição corporal.',
          button: 'Calcular Gordura Corporal',
          routerTo: '/bodyfat',
          class: 'bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-5 uppercase rounded-sm transition duration-300 ease-in-out hover:from-green-600 hover:to-green-700'
        },
        {
          id: 3,
          title: 'Cálculo de Taxa de Água Diária',
          description: 'Calcule a quantidade ideal de água que você deve consumir diariamente.',
          button: 'Calcular Taxa de Água Diária',
          routerTo: '/water_intake',
          class: 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-4 px-5 uppercase rounded-sm transition duration-300 ease-in-out hover:from-cyan-600 hover:to-cyan-700'
        },
        {
          id: 4,
          title: 'Cálculo de Macronutrientes',
          description: 'Calcule a quantidade ideal de proteínas, carboidratos e gorduras para sua dieta.',
          button: 'Calcular Macronutrientes',
          routerTo: '/macronutrients',
          class: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 px-5 uppercase rounded-sm transition duration-300 ease-in-out hover:from-purple-600 hover:to-purple-700'
        }

      ]
    }
  }
}
</script>

<style scoped>

</style>