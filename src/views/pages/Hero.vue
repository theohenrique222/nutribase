<template>
    <section id="hero" class="relative w-full min-h-screen overflow-hidden bg-neutral-950">
        <div class="absolute inset-0 bg-gradient-to-br from-neutral-950 via-lime-950/20 to-neutral-950"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(132,204,22,0.15),transparent_50%)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(132,204,22,0.08),transparent_50%)]"></div>
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4NUI0MjIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

        <main class="relative flex flex-col-reverse w-full max-w-xs px-2 m-auto lg:flex-row sm:px-3 lg:max-w-6xl md:max-w-3xl sm:max-w-xl">
            <div class="hidden w-full lg:flex" data-aos="fade-right" data-aos-duration="1200">
                <img class="bottom-0 mt-5 lg:mt-24 lg:h-auto sm:h-1/2 drop-shadow-2xl" src="/avatar.webp" alt="Avatar">
            </div>

            <div class="flex flex-col w-full m-auto mt-24 lg:h-screen lg:text-end">
                <div class="flex flex-col justify-center flex-grow">
                    <div v-for="item in contents" :key="item.id">
                        <p class="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase border rounded-full text-lime-400 border-lime-500/30 bg-lime-500/10" data-aos="fade-down" data-aos-duration="800">
                            <span class="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse"></span>
                            Sua saúde inteligente
                        </p>
                        <h2 class="py-4 text-5xl font-black uppercase text-white md:text-6xl lg:text-7xl" data-aos="fade-up" data-aos-duration="1000">
                            <span class="bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-400 bg-clip-text text-transparent">{{ item.title }}</span>
                        </h2>
                        <h3 class="py-3 text-lg font-semibold uppercase text-lime-400 md:text-xl lg:text-2xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
                            {{ item.caption }}
                        </h3>
                        <p class="mb-10 text-base leading-relaxed text-neutral-400 font-extralight md:text-lg lg:mb-0 max-w-2xl lg:ml-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            {{ $t('description') }}
                        </p>
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center mt-8 mb-10 space-y-4 lg:flex-row lg:justify-end lg:space-y-0 lg:space-x-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450">
                    <a href="/login" class="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 border border-neutral-700 rounded-xl hover:border-lime-500/50 hover:bg-lime-500/10">
                        Já sou membro
                        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </a>
                    <a href="#formulario" class="group relative inline-flex items-center gap-2 px-8 py-3 text-sm font-bold text-neutral-950 uppercase transition-all duration-300 rounded-xl bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-500 hover:from-lime-500 hover:via-lime-600 hover:to-emerald-600 hover:shadow-lg hover:shadow-lime-500/25 hover:-translate-y-0.5">
                        Assine Já
                        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
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
