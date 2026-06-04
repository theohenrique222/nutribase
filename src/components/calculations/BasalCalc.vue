<template>
    <div class="space-y-3">
        <FormField label="Peso (kg)" v-model="weight" type="number" />
        <FormField label="Altura (cm)" v-model="height" type="number" />
        <FormField label="Idade" v-model="age" type="number" />

        <FormField label="Gênero" v-model="gender" type="select" :options="genderOptions" />

        <Button label="Calcular" class="w-full" severity="contrast" @click="calcular" />

        <div v-if="resultado"
            class="relative overflow-hidden p-5 rounded-xl bg-gradient-to-br from-lime-500/10 to-emerald-500/5 border border-lime-500/20 text-center">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(132,204,22,0.08),transparent_60%)]"></div>
            <div class="relative">
                <p class="text-xs font-semibold tracking-wider uppercase text-lime-400/70 mb-1">Taxa Metabólica Basal</p>
                <p class="text-3xl font-black text-lime-400">{{ resultado }} <span class="text-lg font-semibold text-lime-400/70">kcal/dia</span></p>
            </div>
        </div>

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
            height: null,
            age: null,
            gender: null,
            resultado: null,
            genderOptions: [
                { label: 'Masculino', value: 'masculino' },
                { label: 'Feminino', value: 'feminino' }
            ]
        };
    },
    methods: {
        calcular() {
            if (!this.weight || !this.height || !this.age || !this.gender) return;

            let c = this.gender === 'masculino'
                ? 88.362 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * this.age)
                : 447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age);

            this.resultado = c.toFixed(0);
        }
    }
};
</script>

<style scoped>
</style>