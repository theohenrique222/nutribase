<template>
    <section id="hero" class="bg-[url('background.jpg')] lg:bg-cover bg-center bg-no-repeat w-full">
        <main
            class="flex flex-col-reverse lg:flex-row w-full px-2 sm:px-3 lg:max-w-6xl md:max-w-3xl sm:max-w-xl max-w-xs m-auto">
            <div class="lg:flex hidden w-full">
                <img class="lg:mt-24 mt-5 bottom-0 lg:h-auto sm:h-1/2" src="/avatar.webp" alt="Avatar">
            </div>

            <div class="flex flex-col w-full m-auto lg:h-screen mt-24 lg:text-end">
                <div class="flex flex-col flex-grow justify-center">
                    <div v-for="item in contents" :key="item.id">
                        <h2 class="uppercase text-lime-400 font-extrabold text-5xl md:text-6xl lg:text-7xl py-4">
                            {{ item.title }}
                        </h2>
                        <h3 class="uppercase text-lime-400 font-medium text-lg md:text-xl lg:text-2xl py-3">
                            {{ item.caption }}
                        </h3>
                        <p class="text-neutral-50 font-extralight text-base md:text-lg lg:mb-0 mb-10">
                            {{ $t('description') }}
                        </p>
                    </div>
                </div>

                <div
                    class="flex flex-col lg:flex-row items-center justify-center lg:justify-end space-y-8 lg:space-y-0 lg:space-x-10 mb-10 mt-6">
                    <button @click="trocarIdioma"
                        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        {{ $t('button') }}
                    </button>
                    <!-- <a href="/" class="text-white hover:text-lime-400">
                        www.nutribase.com.br
                    </a> -->
                    <a href="/"
                        class="bg-lime-400 text-neutral-700 hover:bg-neutral-100 py-3 px-10 rounded-sm uppercase font-bold">
                        Assine Já
                    </a>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
export default {
    name: "Hero",
    data() {
        return {
            contents: [
                {
                    id: 1,
                    title: "NUTRIBASE",
                    caption: "Sua saúde simplificada!",
                    content: "No NutriBase, você tem tudo o que precisa para manter sua saúde em dia sem complicação. Calcule sua ingestão diária ideal de água, descubra seu metabolismo basal e organize a distribuição exata dos seus macronutrientes. Tudo isso em uma interface rápida, intuitiva e moderna, para que você foque no que realmente importa: seu bem-estar."
                },
            ]
        }
    },
    methods: {
        trocarIdioma() {
            this.$i18n.lang = this.$i18n.lang === 'pt' ? 'en' : 'pt';
        }
    }
}
</script>
