<template>
    <div class="container mx-auto p-6">
      <header class="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center p-6 rounded-lg shadow-lg mb-6">
        <h1 class="text-3xl font-bold">Calculadora de Metabolismo Basal e Nutrientes</h1>
        <p class="text-lg mt-2">Insira suas informações para calcular seu metabolismo basal, a quantidade recomendada de água e proteínas.</p>
      </header>
      
      <main class="bg-white p-6 rounded-lg shadow-lg mb-6">
        <form @submit.prevent="calcular" class="space-y-6">
          <div class="form-group">
            <label for="peso" class="block font-bold mb-2">Peso (kg):</label>
            <input type="number" id="peso" v-model="peso" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div class="form-group">
            <label for="altura" class="block font-bold mb-2">Altura (cm):</label>
            <input type="number" id="altura" v-model="altura" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div class="form-group">
            <label for="idade" class="block font-bold mb-2">Idade:</label>
            <input type="number" id="idade" v-model="idade" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div class="form-group">
            <label for="genero" class="block font-bold mb-2">Gênero:</label>
            <select id="genero" v-model="genero" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
          
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg font-bold transition duration-300 ease-in-out hover:bg-blue-600">Calcular</button>
        </form>
        
        <div v-if="resultado" class="bg-white p-6 rounded-lg shadow-lg mt-6 text-center">
          <h2 class="text-2xl font-bold mb-4">Resultado</h2>
          <p class="text-lg">Seu metabolismo basal é: <strong class="font-semibold">{{ resultado.calorias }} calorias</strong> por dia.</p>
          <p class="text-lg">A quantidade recomendada de água é: <strong class="font-semibold">{{ resultado.agua }} ml</strong> por dia.</p>
          <p class="text-lg">A quantidade recomendada de proteínas é: <strong class="font-semibold">{{ resultado.proteinas }} gramas</strong> por dia.</p>
        </div>
      </main>
      
      <footer class="bg-gray-200 text-center py-4 border-t border-gray-300">
        <p class="text-sm">&copy; 2024 Calculadora de Metabolismo Basal e Nutrientes. Todos os direitos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Metabolismo Basal',
    data() {
      return {
        peso: '',
        altura: '',
        idade: '',
        genero: '',
        resultado: null,
      };
    },
    methods: {
      calcular() {
        let calorias;
        if (this.genero === 'masculino') {
          calorias = 88.362 + (13.397 * this.peso) + (4.799 * this.altura) - (5.677 * this.idade);
        } else {
          calorias = 447.593 + (9.247 * this.peso) + (3.098 * this.altura) - (4.330 * this.idade);
        }
  
        let agua;
        if (this.genero === 'masculino') {
          agua = this.peso * 35;
        } else {
          agua = this.peso * 31;
        }
  
        let proteinas = this.peso * 0.8;
  
        this.resultado = {
          calorias: calorias.toFixed(2),
          agua: agua.toFixed(2),
          proteinas: proteinas.toFixed(2),
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
  