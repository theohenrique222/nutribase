<template>
    <section id="hero" class="bg-[url('background.jpg')] lg:bg-cover bg-center bg-no-repeat w-full">
        <main
            class="flex flex-col-reverse w-full max-w-xs px-2 m-auto lg:flex-row sm:px-3 lg:max-w-6xl md:max-w-3xl sm:max-w-xl">
            <div class="hidden w-full lg:flex">
                <img class="bottom-0 mt-5 lg:mt-24 lg:h-auto sm:h-1/2" src="/avatar.webp" alt="Avatar">
            </div>

            <div class="flex flex-col w-full m-auto mt-24 lg:h-screen lg:text-end">
                <div class="flex flex-col justify-center flex-grow">
                    <div v-for="item in contents" :key="item.id">
                        <h2 class="py-4 text-5xl font-extrabold uppercase text-lime-400 md:text-6xl lg:text-7xl">
                            {{ item.title }}
                        </h2>
                        <h3 class="py-3 text-lg font-medium uppercase text-lime-400 md:text-xl lg:text-2xl">
                            {{ item.caption }}
                        </h3>
                        <p class="mb-10 text-base text-neutral-50 font-extralight md:text-lg lg:mb-0">
                            {{ $t('description') }}
                        </p>
                    </div>
                </div>

                <div
                    class="flex flex-col items-center justify-center mt-6 mb-10 space-y-8 lg:flex-row lg:justify-end lg:space-y-0 lg:space-x-10">
                    <!-- <button @click="trocarIdioma"
                        class="px-4 py-2 mt-4 text-white transition bg-blue-500 rounded hover:bg-blue-600">
                        {{ $t('button') }}
                    </button> -->
                    <a href="/login" class="text-white transition-all hover:text-lime-400">
                        Já sou membro
                    </a>
                    <a href="#formulario"
                        class="px-10 py-3 font-bold uppercase transition rounded-sm bg-lime-400 text-neutral-50 hover:opacity-50">
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
