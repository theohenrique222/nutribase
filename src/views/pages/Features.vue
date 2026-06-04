<template>
    <section id="features" class="relative w-full overflow-hidden bg-neutral-900">
        <div class="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950"></div>
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>

        <main class="relative flex flex-col w-full max-w-xs px-2 py-20 m-auto sm:px-3 lg:max-w-6xl md:max-w-3xl sm:max-w-xl lg:py-32">
            <div class="flex flex-col w-full m-auto">
                <div class="max-w-3xl" data-aos="fade-up" data-aos-duration="1000">
                    <p class="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase border rounded-full text-lime-400 border-lime-500/30 bg-lime-500/10">
                        Funcionalidades
                    </p>
                    <h2 class="py-4 text-3xl font-black text-white md:text-4xl lg:text-5xl">
                        Calcule, ajuste e <span class="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">evolua</span>!
                    </h2>
                    <p class="w-full py-3 text-base leading-relaxed text-neutral-400 font-extralight md:text-lg lg:w-10/12">
                        Com o NutriBase, você não precisa complicar sua rotina. Ferramentas precisas para cuidar do seu corpo com inteligência.
                    </p>
                </div>

                <div class="grid grid-cols-1 gap-5 mt-12 md:grid-cols-2 lg:grid-cols-4">
                    <div v-for="(feature, index) in features" :key="index"
                        class="group relative p-6 transition-all duration-500 border rounded-2xl bg-neutral-800/50 border-neutral-700/50 hover:border-lime-500/30 hover:bg-neutral-800 hover:shadow-lg hover:shadow-lime-500/5 hover:-translate-y-1"
                        data-aos="fade-up" data-aos-duration="800" :data-aos-delay="index * 150">
                        <div class="flex items-center justify-center w-12 h-12 mb-4 transition-all duration-300 rounded-xl bg-lime-500/10 group-hover:bg-lime-500/20 group-hover:scale-110">
                            <span v-html="feature.icon" class="text-lime-400"></span>
                        </div>
                        <h3 class="mb-2 text-lg font-bold text-white">{{ feature.title }}</h3>
                        <p class="text-sm leading-relaxed text-neutral-400">{{ feature.description }}</p>
                    </div>
                </div>

                <div class="flex justify-center mt-12" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#calculations" class="group relative inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase transition-all duration-300 rounded-xl bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-500 text-neutral-950 hover:from-lime-500 hover:via-lime-600 hover:to-emerald-600 hover:shadow-lg hover:shadow-lime-500/25 hover:-translate-y-0.5">
                        Explore nossas funcionalidades
                        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </a>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
export default {
    data() {
        return {
            features: [
                {
                    title: "Metabolismo Basal",
                    description: "Descubra quantas calorias seu corpo gasta em repouso para manter funções vitais.",
                    icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
                },
                {
                    title: "Macronutrientes",
                    description: "Distribuição ideal de proteínas, carboidratos e gorduras para seus objetivos.",
                    icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>'
                },
                {
                    title: "Hidratação Ideal",
                    description: "Calcule a quantidade exata de água que você precisa consumir diariamente.",
                    icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>'
                },
                {
                    title: "Gordura Corporal",
                    description: "Estimativa do percentual de gordura com base em medidas antropométricas.",
                    icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'
                }
            ]
        }
    }
}
</script>
