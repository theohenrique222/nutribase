<template>
  <section class="bg-[url('/background.png')]">
    <div class="container mx-auto p-6">
      <header
        class="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center p-6 rounded-md shadow-lg mb-6"
      >
        <h1 class="lg:text-2xl text-xl font-bold uppercase">
          Cálculo de Quantidade de Água Diária
        </h1>
        <p class="lg:text-lg text-base font-light mt-2">
          Insira suas informações para calcular a quantidade ideal de água que
          você deve consumir diariamente.
        </p>
      </header>

      <main class="bg-gray-100 p-6 rounded-lg shadow-lg">
        <form @submit.prevent="calcularAguaDiaria" class="space-y-6">
          <div class="grid grid-cols-1 gap-4">
            <div>
              <label for="peso" class="block text-lg font-medium text-gray-700"
                >Peso (kg):</label
              >
              <input
                type="number"
                v-model="peso"
                id="peso"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                for="atividade"
                class="block text-lg font-medium text-gray-700"
                >Nível de Atividade:</label
              >
              <select
                v-model="atividade"
                id="atividade"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled selected>Selecione a sua atividade</option>
                <option value="sedentario">Sedentário</option>
                <option value="moderado">Moderado</option>
                <option value="ativo">Ativo</option>
              </select>
            </div>
          </div>

          <div class="text-center pb-10">
            <button
              type="submit"
              class="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-4 w-full uppercase rounded-sm transition duration-300 ease-in-out hover:from-blue-600 hover:to-teal-700"
            >
              Calcular Água Diária
            </button>
          </div>
        </form>

        <div
          v-if="resultado"
          class="bg-blue-100 p-6 rounded-lg shadow-lg mt-6 text-center"
        >
          <h2 class="text-2xl font-bold">Resultado</h2>
          <p class="text-lg mt-2">
            Você deve consumir aproximadamente
            <span class="font-bold">{{ resultado }} litros</span> de água
            diariamente.
          </p>
        </div>
      </main>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "Water Intake",
  data() {
    return {
      peso: null,
      atividade: "sedentario",
      resultado: null,
    };
  },
  methods: {
    calcularAguaDiaria() {
      let multiplicador = 0;

      switch (this.atividade) {
        case "sedentario":
          multiplicador = 35;
          break;
        case "moderado":
          multiplicador = 40;
          break;
        case "ativo":
          multiplicador = 45;
          break;
      }

      const aguaDiaria = (this.peso * multiplicador) / 1000;
      this.resultado = aguaDiaria.toFixed(2);
    },
  },
};
</script>
  
  <style scoped>
.container {
  max-width: 600px;
}
</style>