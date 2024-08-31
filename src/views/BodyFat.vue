<template>
  <section class="bg-[url('/background.png')]">
    <div class="container mx-auto p-6">
      <header class="bg-gradient-to-r from-green-500 to-teal-400 text-white text-center p-6 rounded-md shadow-lg mb-6">
        <h1 class="lg:text-2xl text-xl font-bold uppercase">Cálculo de Percentual de Gordura Corporal</h1>
        <p class="lg:text-lg text-base font-light mt-2">Insira suas medidas para calcular o percentual de gordura corporal.</p>
      </header>
  
      <main class="bg-gray-100 p-6 rounded-lg shadow-lg">
        <form @submit.prevent="calcularGorduraCorporal" class="space-y-6">
          <div class="grid grid-cols-1 gap-4">
            <div>
              <label for="sexo" class="block text-lg font-medium text-gray-700">Sexo:</label>
              <select v-model="sexo" id="sexo" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="" disabled selected>Selecione seu sexo</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </select>
            </div>
  
            <div>
              <label for="altura" class="block text-lg font-medium text-gray-700">Altura (cm):</label>
              <input type="number" v-model="altura" id="altura" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required>
            </div>
  
            <div>
              <label for="circunferenciaCintura" class="block text-lg font-medium text-gray-700">Circunferência da Cintura (cm):</label>
              <input type="number" v-model="circunferenciaCintura" id="circunferenciaCintura" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required>
            </div>
  
            <div>
              <label for="circunferenciaPescoço" class="block text-lg font-medium text-gray-700">Circunferência do Pescoço (cm):</label>
              <input type="number" v-model="circunferenciaPescoço" id="circunferenciaPescoço" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required>
            </div>
  
            <div v-if="sexo === 'feminino'">
              <label for="circunferenciaQuadril" class="block text-lg font-medium text-gray-700">Circunferência do Quadril (cm):</label>
              <input type="number" v-model="circunferenciaQuadril" id="circunferenciaQuadril" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            </div>
          </div>
  
          <div class="text-center">
            <button type="submit" class="bg-gradient-to-r from-green-500 to-teal-400 text-white py-4 w-full uppercase rounded-sm transition duration-300 ease-in-out hover:from-green-600 hover:to-teal-700">
              Calcular Percentual de Gordura
            </button>
          </div>
        </form>
  
        <div v-if="resultado" class="bg-green-100 p-6 rounded-lg shadow-lg mt-6 text-center">
          <h2 class="text-2xl font-bold">Resultado</h2>
          <p class="text-lg mt-2">Seu percentual de gordura corporal é aproximadamente <span class="font-bold">{{ resultado }}%</span>.</p>
        </div>
      </main>
    </div>
  </section>
    
  </template>
  
  <script>
  export default {
    name: 'Body Fat',
    data() {
      return {
        sexo: 'masculino',
        altura: null,
        circunferenciaCintura: null,
        circunferenciaPescoço: null,
        circunferenciaQuadril: null,  // Para mulheres
        resultado: null,
      };
    },
    methods: {
      calcularGorduraCorporal() {
        let gorduraCorporal = 0;
  
        if (this.sexo === 'masculino') {
          // Fórmula para homens
          gorduraCorporal = 495 / (1.0324 - 0.19077 * Math.log10(this.circunferenciaCintura - this.circunferenciaPescoço) + 0.15456 * Math.log10(this.altura)) - 450;
        } else if (this.sexo === 'feminino') {
          // Fórmula para mulheres
          gorduraCorporal = 495 / (1.29579 - 0.35004 * Math.log10(this.circunferenciaCintura + this.circunferenciaQuadril - this.circunferenciaPescoço) + 0.22100 * Math.log10(this.altura)) - 450;
        }
  
        this.resultado = gorduraCorporal.toFixed(2);
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  </style>