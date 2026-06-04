<template>
    <div class="space-y-3">

        <!-- PESO -->
        <FormField label="Peso (kg)" v-model="weight" type="number" />

        <!-- OBJETIVO -->
        <FormField label="Objetivo" v-model="goal" type="select" :options="goalOptions" />

        <!-- NÍVEL DE ATIVIDADE -->
        <FormField label="Nível de Atividade" v-model="activity" type="select" :options="activityOptions" />

        <!-- BOTÃO -->
        <Button label="Calcular" severity="contrast" class="w-full" @click="calcular" />

        <!-- RESULTADO -->
        <div v-if="resultado"
            class="relative overflow-hidden p-5 rounded-xl bg-gradient-to-br from-lime-500/10 to-emerald-500/5 border border-lime-500/20">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(132,204,22,0.08),transparent_60%)]"></div>
            <div class="relative space-y-2">
                <p class="text-xs font-semibold tracking-wider uppercase text-lime-400/70 mb-3 text-center">Distribuição Diária</p>
                <div class="grid grid-cols-2 gap-2">
                    <div class="p-3 rounded-lg bg-neutral-900/60 text-center">
                        <p class="text-xs text-neutral-500 mb-1">Calorias</p>
                        <p class="text-lg font-bold text-lime-400">{{ resultado.calorias }}</p>
                        <p class="text-xs text-neutral-500">kcal</p>
                    </div>
                    <div class="p-3 rounded-lg bg-neutral-900/60 text-center">
                        <p class="text-xs text-neutral-500 mb-1">Proteínas</p>
                        <p class="text-lg font-bold text-lime-400">{{ resultado.proteinas }}</p>
                        <p class="text-xs text-neutral-500">g</p>
                    </div>
                    <div class="p-3 rounded-lg bg-neutral-900/60 text-center">
                        <p class="text-xs text-neutral-500 mb-1">Carboidratos</p>
                        <p class="text-lg font-bold text-lime-400">{{ resultado.carboidratos }}</p>
                        <p class="text-xs text-neutral-500">g</p>
                    </div>
                    <div class="p-3 rounded-lg bg-neutral-900/60 text-center">
                        <p class="text-xs text-neutral-500 mb-1">Gorduras</p>
                        <p class="text-lg font-bold text-lime-400">{{ resultado.gorduras }}</p>
                        <p class="text-xs text-neutral-500">g</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA -->
        <Button v-if="resultado" label="Ver análise completa no dashboard →"
            class="w-full !bg-neutral-800 !border-neutral-700 text-neutral-300 hover:!bg-neutral-700 hover:!border-lime-500/30 transition-all"
            @click="$emit('go-dashboard')" />

    </div>
</template>

<script>
import FormField from '../ui/FormField.vue';

export default {
    components: { FormField },

    data() {
        return {
            weight: null,
            goal: null,
            activity: null,

            resultado: null,

            goalOptions: [
                { label: 'Manutenção', value: 'manutencao' },
                { label: 'Perda de peso', value: 'perda' },
                { label: 'Ganho de massa', value: 'ganho' }
            ],

            activityOptions: [
                { label: 'Sedentário', value: 'sedentario' },
                { label: 'Leve', value: 'leve' },
                { label: 'Moderado', value: 'moderado' },
                { label: 'Intenso', value: 'intenso' }
            ]
        };
    },

    methods: {
        calcular() {
            if (!this.weight || !this.goal || !this.activity) {
                alert("Preencha todos os campos");
                return;
            }

            // 🔥 Calorias base
            let caloriasBase = this.weight * 22;

            // 🔥 Fator de atividade
            let fator = {
                sedentario: 1.2,
                leve: 1.375,
                moderado: 1.55,
                intenso: 1.725
            };

            let caloriasTotais = caloriasBase * fator[this.activity];

            // 🎯 Ajuste por objetivo
            if (this.goal === 'perda') {
                caloriasTotais -= 500;
            } else if (this.goal === 'ganho') {
                caloriasTotais += 500;
            }

            // 🧠 Distribuição de macros
            let proteinas = (caloriasTotais * 0.3) / 4;
            let carboidratos = (caloriasTotais * 0.4) / 4;
            let gorduras = (caloriasTotais * 0.3) / 9;

            this.resultado = {
                calorias: caloriasTotais.toFixed(0),
                proteinas: proteinas.toFixed(0),
                carboidratos: carboidratos.toFixed(0),
                gorduras: gorduras.toFixed(0)
            };
        }
    }
};
</script>

<style scoped>
</style>