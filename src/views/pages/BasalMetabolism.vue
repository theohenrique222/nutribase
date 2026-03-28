<template>
  <section class="lg:bg-[url('/background2.png')] min-h-screen">
    <div class="h-16"></div>
    <div class="container p-6 mx-auto">
      <header class="p-6 mb-6 text-center text-white rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-sky-800">
        <h1 class="text-xl font-bold uppercase lg:text-2xl">
          Calculadora de Metabolismo Basal
        </h1>
        <p class="mt-2 text-base font-light lg:text-lg">
          Insira suas informações para calcular seu metabolismo basal, a quantidade recomendada de água e proteínas.
        </p>
      </header>

      <main class="p-6 mb-6 rounded-lg shadow-2xl bg-gray-100/20 backdrop-blur-sm">
        <form @submit.prevent="calcular" class="space-y-6">
          <div class="form-group">
            <label for="peso" class="block mb-2 font-bold">
              Peso (kg):
            </label>
            <input type="number" id="peso" v-model="weight" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div class="form-group">
            <label for="altura" class="block mb-2 font-bold">
              Altura (cm):
            </label>
            <input type="number" id="altura" v-model="height" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div class="form-group">
            <label for="idade" class="block mb-2 font-bold">
              Idade:
            </label>
            <input type="number" id="idade" v-model="age" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div class="form-group">
            <label for="genero" class="block mb-2 font-bold">
              Gênero:
            </label>
            <select id="genero" v-model="gender" required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="" disabled selected>Selecione seu gênero</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>

          <button type="submit" class="w-full py-4 text-white uppercase transition duration-300 ease-in-out rounded-sm bg-gradient-to-r from-blue-500 to-sky-800 hover:from-blue-600 hover:to-blue-700">Calcular</button>
        </form>

        <div v-if="resultado" class="p-6 mt-6 text-center rounded-lg shadow-lg bg-sky-700">
          <h2 class="mb-4 text-2xl font-bold">Resultado</h2>
          <p class="text-lg">
            Seu metabolismo basal é: <br>
            <strong class="font-semibold underline">{{ resultado.calorias }} calorias</strong> por dia.
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

      this.resultado  = 
      {
          calorias:   calorias. toFixed(2),
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
