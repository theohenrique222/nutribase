<template>
  <section class="lg:bg-[url('/background2.png')] min-h-screen">
    <div class="h-16"></div>
    <div class="container mx-auto p-6">
      <header class="bg-gradient-to-r from-blue-500 to-sky-800 text-white text-center p-6 rounded-lg shadow-md mb-6">
        <h1 class="lg:text-2xl text-xl font-bold uppercase">
          Calculadora de Metabolismo Basal
        </h1>
        <p class="lg:text-lg text-base font-light mt-2">
          Insira suas informações para calcular seu metabolismo basal, a quantidade recomendada de água e proteínas.
        </p>
      </header>

      <main class="bg-gray-100/20 backdrop-blur-sm p-6 rounded-lg shadow-2xl mb-6">
        <form @submit.prevent="calcular" class="space-y-6">
          <div class="form-group">
            <label for="peso" class="block font-bold mb-2">
              Peso (kg):
            </label>
            <input type="number" id="peso" v-model="weight" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div class="form-group">
            <label for="altura" class="block font-bold mb-2">
              Altura (cm):
            </label>
            <input type="number" id="altura" v-model="height" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div class="form-group">
            <label for="idade" class="block font-bold mb-2">
              Idade:
            </label>
            <input type="number" id="idade" v-model="age" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div class="form-group">
            <label for="genero" class="block font-bold mb-2">
              Gênero:
            </label>
            <select id="genero" v-model="gender" required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="" disabled selected>Selecione seu gênero</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>

          <button type="submit" class="bg-gradient-to-r from-blue-500 to-sky-800 text-white py-4 w-full uppercase rounded-sm transition duration-300 ease-in-out hover:from-blue-600 hover:to-blue-700">Calcular</button>
        </form>

        <div v-if="resultado" class="bg-sky-700 p-6 rounded-lg shadow-lg mt-6 text-center">
          <h2 class="text-2xl font-bold mb-4">Resultado</h2>
          <p class="text-lg">
            Seu metabolismo basal é: <br>
            <strong class="font-semibold underline">{{ resultado.calorias }} calorias</strong> por dia.
          </p>
          <p class="text-lg">
            A quantidade recomendada de proteínas é: <br>
            <strong class="font-semibold underline">{{ resultado.proteinas }} gramas</strong> por dia.
          </p>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Metabolismo Basal',
  data() {
    return {
      weight:     '',
      height:     '',
      age:        '',
      gender:     '',
      resultado:  null,
    };
  },
  methods: {
    calcular() 
    {
      let weight      =   parseFloat  (this.weight);
      let height      =   parseFloat  (this.height);
      let age         =   parseInt    (this.age);

      if (!weight || !height || !age || !this.gender) 
      {
          alert("Por favor, preencha todos os campos corretamente.");
          return;
      }

      let calorias;

      if (this.gender === 'masculino') 
      {
          calorias    = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      }
      if (this.gender === 'feminino') 
      {
          calorias    = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
      let proteinas   = weight * 0.8;

      this.resultado  = 
      {
          calorias:   calorias. toFixed(2),
          proteinas:  proteinas.toFixed(2),
      };
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
