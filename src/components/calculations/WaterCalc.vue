<template>
    <div class="space-y-3">

        <!-- PESO -->
        <FormField label="Peso (kg)" v-model="weight" type="number" />

        <!-- ATIVIDADE -->
        <FormField label="Nível de Atividade" v-model="activity" type="select" :options="activityOptions" />

        <!-- BOTÃO -->
        <Button label="Calcular" severity="contrast" class="w-full" @click="calcular" />

        <!-- RESULTADO -->
        <div v-if="resultado"
            class="relative overflow-hidden p-5 rounded-xl bg-gradient-to-br from-lime-500/10 to-emerald-500/5 border border-lime-500/20 text-center">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(132,204,22,0.08),transparent_60%)]"></div>
            <div class="relative">
                <p class="text-xs font-semibold tracking-wider uppercase text-lime-400/70 mb-1">Consumo Diário Recomendado</p>
                <p class="text-3xl font-black text-lime-400">{{ resultado.litros }} <span class="text-lg font-semibold text-lime-400/70">litros</span></p>
                <p class="text-sm text-neutral-500 mt-1">(~ {{ resultado.ml }} ml)</p>
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
            activity: null,
            resultado: null,

            activityOptions: [
                { label: 'Sedentário', value: 'sedentario' },
                { label: 'Moderado', value: 'moderado' },
                { label: 'Ativo', value: 'ativo' }
            ]
        };
    },

    methods: {
        calcular() {
            if (!this.weight || !this.activity) {
                alert("Preencha todos os campos");
                return;
            }

            // 💧 Multiplicador baseado na atividade
            const multipliers = {
                sedentario: 35,
                moderado: 40,
                ativo: 45
            };

            const ml = this.weight * multipliers[this.activity];
            const litros = ml / 1000;

            this.resultado = {
                ml: ml.toFixed(0),
                litros: litros.toFixed(2)
            };
        }
    }
};
</script>

<style scoped>
</style>