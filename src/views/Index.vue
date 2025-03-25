<template>
  <section class="bg-[url('/background.jpg')] bg-cover w-full lg:h-screen h-full">
    <main class="flex flex-row w-full max-w-6xl m-auto">

      <div class="flex w-full h-screen">
        <img class="w-full mt-24" src="../assets/avatar.webp" alt="Avatar">
      </div>

      <div class="flex flex-col w-full m-auto h-screen">
        <div class="flex flex-col flex-grow justify-center">
          <h2 class="uppercase text-lime-400 font-extrabold text-7xl text-end py-2">NUTRIBASE</h2>
          <h3 class="uppercase text-lime-400 font-medium text-2xl text-end py-3">Sua saúde, simplificada.</h3>
          <p class="text-neutral-50 font-extralight text-end text-base">
            O NutriBase te ajuda a calcular de forma rápida e precisa sua ingestão diária de água, metabolismo basal e
            distribuição ideal de macronutrientes. Tudo isso em uma interface leve, intuitiva e moderna, para você focar
            no que realmente importa: seu bem-estar.
          </p>
        </div>

        <div class="flex items-center justify-end space-x-10 mb-10">
          <a href="/" class="text-white hover:text-lime-400">www.nutribase.com.br</a>
          <a href="" class="bg-lime-400 text-neutral-700 hover:bg-neutral-100 py-3 px-10 rounded-sm uppercase font-bold">Assine Já</a>
        </div>

      </div>
    </main>
  </section>

  <section class="bg-[url('/background-2.jpg')] bg-cover w-full lg:h-screen h-full">
    <main class="flex flex-row w-full max-w-6xl m-auto">

      <div class="flex flex-col w-full m-auto h-screen pt-10">
        <div class="flex flex-col flex-grow justify-center">
          <h2 class="uppercase text-lime-400 font-extrabold text-4xl py-2">Calcule, ajuste e evolua</h2>
          <h3 class="uppercase text-lime-400 font-medium text-base py-3 ni">Tudo o que você precisa para cuidar do seu
            corpo. </h3>
          <p class="text-neutral-100 font-extralight text-base w-10/12">
            Com o NutriBase, você não precisa complicar sua rotina. Calcule facilmente seu metabolismo basal, descubra
            sua necessidade diária de proteínas, carboidratos e gorduras, além de manter o controle da sua hidratação.
            Pensado para quem busca praticidade, seja você iniciante ou já avançado na sua jornada fitness.
          </p>
        </div>

        <div class="flex items-center space-x-10 mb-20">
          <a href="" class="bg-lime-400 text-neutral-700 py-5 px-10 rounded-3xl uppercase font-bold">Explore nossas
            funcionalidades</a>
        </div>

      </div>
      <div class="flex w-full h-screen">

      </div>
    </main>
  </section>
  <section class="bg-[url('/background-hero.jpg')] bg-cover w-full lg:h-screen h-full">
    <main class="flex flex-row w-full max-w-6xl m-auto">

      <div class="flex w-full h-screen">
        <img class="w-full mt-24" src="../assets/avatar-hero.png" alt="Avatar">
      </div>

      <div class="flex flex-col w-full m-auto h-screen">
        <div class="flex flex-col flex-grow justify-center">
          <h2 class="uppercase text-lime-400 font-extrabold text-4xl text-end py-2">Dietas personalizadas, do seu jeito</h2>
          <h3 class="uppercase text-lime-400 font-medium text-base text-end py-3">Adapte sua alimentação em tempo real, de acordo com seus objetivos</h3>
          <p class="text-neutral-100 font-extralight text-base text-end">
            Não existe dieta única para todos. No NutriBase, você monta e ajusta seu plano alimentar facilmente, escolhendo entre diferentes objetivos como emagrecimento, ganho de massa ou manutenção. Tudo atualizado em tempo real, com recomendações balanceadas e flexíveis para acompanhar sua rotina e evolução.
          </p>
        </div>

        <div class="flex items-center justify-end pb-10">
          <a href="" class="bg-lime-400 text-neutral-700 py-3 px-10 rounded-sm uppercase font-bold">Monte sua dieta agora</a>
        </div>

      </div>
    </main>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.ni {
  font-family: Poppins;
}
</style>