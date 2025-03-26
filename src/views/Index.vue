<template>
  <section class="bg-[url('/background.jpg')] lg:bg-cover bg-center bg-no-repeat w-full lg:h-screen min-h-screen">
    <main class="flex flex-col-reverse lg:flex-row w-full max-w-6xl m-auto">
      <div class="flex w-full lg:h-screen justify-center">
        <img class="lg:mt-24 mt-5 lg:h-auto sm:h-1/2" src="../assets/avatar.webp" alt="Avatar">
      </div>
      <div class="flex flex-col w-full m-auto lg:h-screen px-5 mt-36 lg:text-end">
        <div class="flex flex-col flex-grow justify-center">
          <h2 class="uppercase text-lime-400 font-extrabold text-5xl md:text-6xl lg:text-7xl py-4">NUTRIBASE</h2>
          <h3 class="uppercase text-lime-400 font-medium text-lg md:text-xl lg:text-2xl py-3">Sua saúde, simplificada.
          </h3>
          <p class="text-neutral-50 font-extralight text-base md:text-lg lg:mb-0 mb-10">
            No NutriBase, você tem tudo o que precisa para manter sua saúde em dia sem complicação. Calcule sua ingestão
            diária ideal de água, descubra seu metabolismo basal e organize a distribuição exata dos seus
            macronutrientes. Tudo isso em uma interface rápida, intuitiva e moderna, para que você foque no que
            realmente importa: seu bem-estar.
          </p>
        </div>

        <div
          class="flex flex-col lg:flex-row items-center justify-center lg:justify-end space-y-8 lg:space-y-0 lg:space-x-10 mb-10 mt-6">
          <a href="/" class="text-white hover:text-lime-400">www.nutribase.com.br</a>
          <a href=""
            class="bg-lime-400 text-neutral-700 hover:bg-neutral-100 py-3 px-10 rounded-sm uppercase font-bold">Assine
            Já</a>
        </div>
      </div>
    </main>
  </section>

  <section class="bg-[url('/background-2.jpg')] bg-cover w-full lg:h-screen min-h-screen">
    <main class="flex flex-col lg:flex-row w-full max-w-6xl m-auto px-5">
      <div class="flex flex-col w-full m-auto lg:h-screen pt-10 text-center lg:text-start">
        <div class="flex flex-col flex-grow justify-center">
          <h2 class="uppercase text-lime-400 font-extrabold text-3xl md:text-4xl py-4">Calcule, ajuste e evolua</h2>
          <h3 class="uppercase text-lime-400 font-medium text-base md:text-lg py-3 ni">Tudo o que você precisa para
            cuidar do seu corpo.</h3>
          <p class="text-neutral-100 font-extralight text-base md:text-lg w-full lg:w-10/12 m-auto lg:m-0">
            Com o NutriBase, você não precisa complicar sua rotina. Calcule facilmente seu metabolismo basal, descubra
            sua necessidade diária de proteínas, carboidratos e gorduras, além de manter o controle da sua hidratação.
            Pensado para quem busca praticidade, seja você iniciante ou já avançado na sua jornada fitness.
          </p>
        </div>

        <div class="flex justify-center lg:justify-start mb-20 mt-8">
          <a href=""
            class="bg-lime-400 text-neutral-700 py-4 px-8 rounded-3xl uppercase font-bold text-sm md:text-base">Explore
            nossas funcionalidades</a>
        </div>

      </div>
      <div class="flex w-full h-0 lg:h-screen"></div>

    </main>
  </section>

  <section class="bg-[url('public/background2.png')] bg-cover w-full lg:h-screen min-h-screen">
    <main class="flex flex-col lg:flex-row w-full max-w-6xl m-auto">

      <div class="w-full max-w-md overflow-hidden flex justify-center">
        <img src="/avatar_basal.jpg" class="max-w-full h-auto" alt="Avatar">
      </div>
      

      <div class="flex flex-col w-full m-auto lg:h-screen px-5 text-center lg:text-end">
        <div class="flex flex-col flex-grow justify-center">
          <h2 class="uppercase text-lime-400 font-extrabold text-3xl md:text-4xl lg:text-3xl py-4">Descubra seu Metabolismo Basal</h2>
          <h3 class="uppercase text-lime-400 font-medium text-base md:text-lg py-3">Entenda seu gasto calórico e otimize sua alimentação.</h3>
          <p class="text-neutral-100 font-extralight text-base md:text-lg">
            O metabolismo basal representa a quantidade de calorias que seu corpo queima em repouso para manter funções vitais como respiração e circulação sanguínea. Com o NutriBase, você calcula esse valor de forma rápida e precisa, permitindo personalizar sua alimentação e atingir seus objetivos com mais eficiência.
          </p>
        </div>

        <div class="flex justify-center lg:justify-end pb-10 mt-6">
          <a href="/basal_metabolism"
            class="bg-lime-400 text-neutral-700 hover:bg-neutral-100 py-3 px-10 rounded-sm uppercase font-bold">Calcule agora</a>
        </div>

      </div>

    </main>
  </section>
</template>
