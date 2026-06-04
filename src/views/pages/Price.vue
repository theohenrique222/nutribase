<template>
    <section id="pricing" class="relative py-16 overflow-hidden bg-neutral-950 sm:py-24">
        <div class="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950"></div>
        <div class="absolute top-0 left-1/2 w-[800px] h-[800px] bg-lime-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        <div class="container relative px-4 mx-auto sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
                <p class="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase border rounded-full text-lime-400 border-lime-500/30 bg-lime-500/10">
                    Planos Acessíveis
                </p>
                <h2 class="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Preços justos para sua <span class="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">realidade</span>.
                </h2>
                <p class="max-w-2xl mx-auto mt-4 text-lg text-neutral-400">
                    Sem taxas ocultas. Escolha o plano ideal e <span class="font-semibold text-white">comece gratuitamente com acesso às principais funcionalidades</span>.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-6 mx-auto mt-16 max-w-7xl md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <div v-for="(plan, index) in plans" :key="index"
                    :class="[
                        'relative flex flex-col justify-between p-8 transition-all duration-500 rounded-3xl',
                        plan.popular
                            ? 'bg-gradient-to-b from-neutral-800 to-neutral-900 border-2 border-lime-500 shadow-xl shadow-lime-500/10 scale-100 lg:scale-105'
                            : 'bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700'
                    ]"
                    data-aos="fade-up" data-aos-duration="800" :data-aos-delay="index * 200">

                    <span v-if="plan.popular"
                        class="absolute px-4 py-1.5 text-xs font-bold text-neutral-950 -translate-x-1/2 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400 -top-3 left-1/2">
                        MAIS POPULAR
                    </span>

                    <div>
                        <h3 class="text-2xl font-bold text-white">{{ plan.name }}</h3>
                        <p class="mt-2 text-sm text-neutral-400">{{ plan.subtitle }}</p>

                        <div class="flex items-baseline mt-6 gap-x-2">
                            <span class="text-4xl font-black tracking-tight text-white">
                                <span class="text-2xl">R$</span> {{ plan.price }}
                            </span>
                            <span class="text-sm font-semibold text-neutral-500">/mês</span>
                        </div>

                        <ul class="mt-8 space-y-4">
                            <li v-for="(feature, fIndex) in plan.features" :key="fIndex" class="flex items-start gap-3 text-sm text-neutral-300">
                                <svg class="flex-none w-5 h-5 mt-0.5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                                </svg>
                                {{ feature }}
                            </li>
                        </ul>
                    </div>

                    <button
                        :class="[
                            'inline-flex items-center justify-center w-full gap-2 px-4 py-3 mt-8 text-sm font-bold transition-all rounded-xl h-12',
                            plan.popular
                                ? 'bg-gradient-to-r from-lime-400 to-emerald-500 text-neutral-950 hover:from-lime-500 hover:to-emerald-600 hover:shadow-lg hover:shadow-lime-500/25 hover:-translate-y-0.5'
                                : 'bg-neutral-800 text-white border border-neutral-700 hover:border-lime-500/50 hover:bg-neutral-700'
                        ]">
                        {{ plan.cta }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            plans: [
                {
                    name: "Plano Start",
                    subtitle: "Ideal para começar",
                    price: "0,00",
                    popular: false,
                    cta: "Criar conta grátis",
                    features: [
                        "Cálculo de metabolismo basal",
                        "Cálculo de macronutrientes",
                        "Consumo diário de água",
                        "Percentual de gordura corporal",
                        "Acesso à dashboard teste"
                    ]
                },
                {
                    name: "Plano Pro",
                    subtitle: "Para quem quer evolução completa",
                    price: "29,90",
                    popular: true,
                    cta: "Começar agora",
                    features: [
                        "Tudo do plano gratuito",
                        "Histórico de dados",
                        "Recomendações inteligentes",
                        "Dashboard completa"
                    ]
                },
                {
                    name: "Plano Enterprise",
                    subtitle: "Para profissionais e equipes",
                    price: "59,90",
                    popular: false,
                    cta: "Começar agora",
                    features: [
                        "Tudo do plano Pro",
                        "Planos alimentares",
                        "Insights avançados",
                        "Suporte prioritário"
                    ]
                }
            ]
        }
    }
}
</script>
