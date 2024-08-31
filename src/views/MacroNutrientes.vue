<template>
  <section class="bg-[url('/background.png')]">
    <div class="container mx-auto p-6">
      <header
        class="bg-gradient-to-r from-blue-500 to-purple-400 text-white text-center p-6 rounded-md shadow-lg mb-6"
      >
        <h1 class="lg:text-2xl text-xl font-bold uppercase">
          Cálculo de Macronutrientes
        </h1>
        <p class="lg:text-lg text-base font-light mt-2">
          Insira seus dados para calcular a quantidade de macronutrientes
          necessários diariamente.
        </p>
      </header>

      <main class="bg-gray-100 p-6 rounded-lg shadow-lg">
        <form @submit.prevent="calcularMacronutrientes" class="space-y-6">
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
                for="objetivo"
                class="block text-lg font-medium text-gray-700"
                >Objetivo:</label
              >
              <select
                v-model="objetivo"
                id="objetivo"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled selected>Selecione o seu objetivo</option>
                <option value="manutencao">Manutenção</option>
                <option value="perda">Perda de Peso</option>
                <option value="ganho">Ganho de Massa</option>
              </select>
            </div>

            <div>
              <label
                for="nivelAtividade"
                class="block text-lg font-medium text-gray-700"
                >Nível de Atividade:</label
              >
              <select
                v-model="nivelAtividade"
                id="nivelAtividade"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled selected>Selecione seu nível de atividade</option>
                <option value="sedentario">Sedentário</option>
                <option value="leve">Leve</option>
                <option value="moderado">Moderado</option>
                <option value="intenso">Intenso</option>
              </select>
            </div>
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="bg-gradient-to-r from-blue-500 to-purple-400 text-white py-4 w-full uppercase rounded-sm transition duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700"
            >
              Calcular Macronutrientes
            </button>
          </div>
        </form>

        <div
          v-if="resultado"
          class="bg-blue-100 p-6 rounded-lg shadow-lg mt-6 text-center"
        >
          <h2 class="text-2xl font-bold">Resultado</h2>
          <p class="text-lg mt-2">
            Para alcançar seu objetivo, você deve consumir aproximadamente:
          </p>
          <p class="text-lg mt-2">
            <span class="font-bold">{{ resultado.proteinas }}g</span> de
            proteínas
          </p>
          <p class="text-lg mt-2">
            <span class="font-bold">{{ resultado.carboidratos }}g</span> de
            carboidratos
          </p>
          <p class="text-lg mt-2">
            <span class="font-bold">{{ resultado.gorduras }}g</span> de gorduras
          </p>
        </div>
      </main>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "Macronutrientes",
  data() {
    return {
      peso: null,
      objetivo: "manutencao",
      nivelAtividade: "sedentario",
      resultado: null,
    };
  },
  methods: {
    calcularMacronutrientes() {
      let caloriasBase = this.peso * 22; // Valor base de calorias por kg de peso
      let fatorAtividade = 1.2;

      if (this.nivelAtividade === "leve") {
        fatorAtividade = 1.375;
      } else if (this.nivelAtividade === "moderado") {
        fatorAtividade = 1.55;
      } else if (this.nivelAtividade === "intenso") {
        fatorAtividade = 1.725;
      }

      let caloriasTotais = caloriasBase * fatorAtividade;

      if (this.objetivo === "perda") {
        caloriasTotais -= 500; // Deficit calórico para perda de peso
      } else if (this.objetivo === "ganho") {
        caloriasTotais += 500; // Excedente calórico para ganho de massa
      }

      let proteinas = (caloriasTotais * 0.3) / 4; // 30% de proteínas
      let carboidratos = (caloriasTotais * 0.4) / 4; // 40% de carboidratos
      let gorduras = (caloriasTotais * 0.3) / 9; // 30% de gorduras

      this.resultado = {
        proteinas: proteinas.toFixed(2),
        carboidratos: carboidratos.toFixed(2),
        gorduras: gorduras.toFixed(2),
      };
    },
  },
};
</script>
  
  <style scoped>
.container {
  max-width: 600px;
}
</style>