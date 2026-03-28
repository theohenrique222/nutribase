<template>
    <section id="calculations" class="bg-[url('background3.jpg')] bg-cover w-full lg:h-screen min-h-screen">
        <main
            class="flex flex-col-reverse w-full max-w-xs px-2 m-auto my-10 space-x-10 lg:flex-row sm:px-3 lg:max-w-6xl md:max-w-3xl sm:max-w-xl lg:my-0">
            <div class="flex flex-col-reverse w-full m-auto lg:flex-col lg:h-screen text-start">
                <div class="flex flex-col justify-center flex-grow">
                    <h2 data-aos="fade-up" data-aos-duration="700"
                        class="py-4 text-3xl font-extrabold uppercase text-lime-400 md:text-4xl lg:text-4xl">
                        Otimize sua Saúde com Cálculos <span class="text-neutral-200"> Personalizados</span>
                    </h2>
                    <h3 data-aos="fade-up" data-aos-duration="1000"
                        class="py-3 text-base font-medium uppercase text-lime-400 md:text-lg">
                        Descubra os números ideais para sua alimentação e bem-estar!
                    </h3>
                    <p data-aos="fade-up" data-aos-duration="1000"
                        class="text-base text-neutral-100 font-extralight md:text-lg">
                        Cada organismo tem necessidades específicas. Com nossos cálculos personalizados, você saberá
                        exatamente quantas calorias consumir, como dividir seus macronutrientes, a quantidade ideal de
                        água por dia e sua porcentagem de gordura corporal. Faça escolhas mais inteligentes para
                        alcançar seus objetivos!
                    </p>

                    <div data-aos="fade-up" data-aos-duration="1000"
                        class="flex-col w-full py-2 mt-10 text-center border-2 lg:flex lg:flex-row lg:py-0 border-lime-500">
                        <template v-for="(item, index) in links" :key="item.id">
                            <div @click="openDialog(item)"
                                class="w-full p-3 transition-all cursor-pointer hover:bg-lime-500/30">
                                <h3 class="text-base lg:text-sm text-lime-500">
                                    {{ item.title }}
                                </h3>
                                <h3 class="text-sm text-white font-extralight">
                                    {{ item.button }}
                                </h3>
                            </div>
                            <div v-if="index < links.length - 1"
                                class="w-2/3 h-px m-auto bg-neutral-100 lg:w-px lg:h-2/3"></div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-full max-w-md overflow-hidden"></div>
        </main>
    </section>

    <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }" :header="selectedItem?.title">

        <component :is="selectedItem?.component" @go-dashboard="goToDashboard" />

    </Dialog>

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
                    button: "Calcule agora!",
                    component: 'BasalCalc',
                    href: "/basal_metabolism",
                    description: "O metabolismo basal (MB) é a energia mínima que seu corpo precisa para manter funções vitais em repouso."
                },
                {
                    id: 2,
                    title: "Gordura corporal",
                    button: "Calcule agora!",
                    component: "BodyFatCalc",
                    href: "/bodyfat",
                    description: "A gordura corporal aproximada é a porcentagem de gordura no corpo em relação ao peso total, estimada com base em peso, altura, idade e sexo."
                },
                {
                    id: 3,
                    title: "Macronutrientes",
                    button: "Calcule agora!",
                    component: "MacroCalc",
                    href: "/macronutrients",
                    description: "O cálculo de macronutrientes determina a quantidade ideal de proteínas, carboidratos e gorduras que você deve consumir diariamente, de acordo com seu peso, nível de atividade e objetivo."
                },
                {
                    id: 4,
                    title: "Água diária",
                    button: "Calcule agora!",
                    component: 'WaterCalc',
                    href: "/water_intake",
                    description: "Descubra a quantidade ideal de água para consumir diariamente."
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
