<template>
    <section id="calculations" class="relative w-full min-h-screen overflow-hidden bg-neutral-950">
        <div class="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <main class="relative flex flex-col w-full max-w-xs px-2 py-20 m-auto sm:px-3 lg:max-w-6xl md:max-w-3xl sm:max-w-xl lg:py-32">
            <div class="flex flex-col w-full m-auto">
                <div class="max-w-3xl" data-aos="fade-up" data-aos-duration="800">
                    <p class="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase border rounded-full w-fit text-lime-400 border-lime-500/30 bg-lime-500/10">
                        Calculadoras
                    </p>
                    <h2 class="py-4 text-3xl font-black text-white md:text-4xl lg:text-5xl">
                        Otimize sua Saúde com Cálculos <span class="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">Personalizados</span>
                    </h2>
                    <p class="py-3 text-base leading-relaxed text-neutral-400 font-extralight md:text-lg">
                        Descubra os números ideais para sua alimentação e bem-estar!
                    </p>
                </div>

                <div class="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-4">
                    <div v-for="(item, index) in links" :key="item.id"
                        @click="openDialog(item)"
                        class="group relative p-5 transition-all duration-500 cursor-pointer rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-lime-500/40 hover:bg-neutral-800/80 hover:shadow-xl hover:shadow-lime-500/10 hover:-translate-y-1"
                        data-aos="fade-up" data-aos-duration="800" :data-aos-delay="index * 150">
                        <div class="flex items-center justify-center w-14 h-14 mb-4 transition-all duration-300 rounded-xl bg-gradient-to-br from-lime-500/20 to-emerald-500/10 group-hover:from-lime-500/30 group-hover:to-emerald-500/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-lime-500/10">
                            <span v-html="item.icon" class="text-lime-400"></span>
                        </div>
                        <h3 class="mb-1 text-lg font-bold text-white">{{ item.title }}</h3>
                        <p class="mb-3 text-sm text-neutral-500">{{ item.description }}</p>
                        <span class="inline-flex items-center gap-1 text-xs font-semibold text-lime-400 transition-all group-hover:gap-2">
                            Calcular
                            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </span>
                    </div>
                </div>
            </div>
        </main>

        <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }" :header="selectedItem?.title" class="bg-neutral-900">
            <component :is="selectedItem?.component" @go-dashboard="goToDashboard" />
        </Dialog>
    </section>
</template>

<script>
import BasalCalc from '@/components/calculations/BasalCalc.vue';
import BodyFatCalc from '@/components/calculations/BodyFatCalc.vue';
import MacroCalc from '@/components/calculations/MacroCalc.vue';
import WaterCalc from '@/components/calculations/WaterCalc.vue';

export default {
    name: "Calculations",
    components: {
        BasalCalc,
        BodyFatCalc,
        MacroCalc,
        WaterCalc
    },
    data() {
        return {
            visible: false,
            selectedItem: null,
            links: [
                {
                    id: 1,
                    title: "Metabolismo Basal",
                    description: "Energia mínima para funções vitais em repouso.",
                    component: 'BasalCalc',
                    href: "/basal_metabolism",
                    icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
                },
                {
                    id: 2,
                    title: "Gordura Corporal",
                    description: "Percentual estimado com base em medidas.",
                    component: "BodyFatCalc",
                    href: "/bodyfat",
                    icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'
                },
                {
                    id: 3,
                    title: "Macronutrientes",
                    description: "Proteínas, carboidratos e gorduras ideais.",
                    component: "MacroCalc",
                    href: "/macronutrients",
                    icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>'
                },
                {
                    id: 4,
                    title: "Água Diária",
                    description: "Quantidade ideal para sua hidratação.",
                    component: 'WaterCalc',
                    href: "/water_intake",
                    icon: '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>'
                }
            ]
        };
    },
    methods: {
        openDialog(item) {
            this.selectedItem = item;
            this.visible = true;
        },
        goToDashboard() {
            window.location.href = "/dashboard";
        }
    }
};
</script>
