<template>
    <div class="container mx-auto p-6">
      <header class="text-center mb-6">
        <h1 class="text-4xl font-bold">Bem-vindo ao Calculador de Saúde</h1>
        <p class="text-lg mt-2">Escolha uma opção abaixo para começar.</p>
      </header>
  
      <main class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 class="text-2xl font-bold mb-4">Cálculo de Metabolismo Basal</h2>
          <p class="mb-4">Calcule a quantidade de calorias que seu corpo precisa para manter suas funções básicas.</p>
          <router-link to="/basal_metabolism">
            <button class="bg-blue-500 text-white py-2 px-4 rounded-lg font-bold transition duration-300 ease-in-out hover:bg-blue-600">
              Calcular Metabolismo Basal
            </button>
          </router-link>
        </div>
  
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 class="text-2xl font-bold mb-4">Cálculo de Gordura Corporal</h2>
          <p class="mb-4">Calcule a porcentagem de gordura corporal para avaliar sua composição corporal.</p>
          <router-link to="/bodyfat">
            <button class="bg-green-500 text-white py-2 px-4 rounded-lg font-bold transition duration-300 ease-in-out hover:bg-green-600">
              Calcular Gordura Corporal
            </button>
          </router-link>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard'
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  </style>