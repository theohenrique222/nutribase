<template>
    <div class="space-y-3">

        <!-- PESO -->
        <FormField label="Peso (kg)" v-model="weight" type="number" />

        <!-- ATIVIDADE -->
        <FormField label="Nível de Atividade" v-model="activity" type="select" :options="activityOptions" />

        <!-- BOTÃO -->
        <Button label="Calcular" severity="success" class="w-full" @click="calcular" />

        <!-- RESULTADO -->
        <div v-if="resultado" class="result">
            <p class="mb-2 font-bold">Consumo diário recomendado:</p>

            <p>💧 {{ resultado.litros }} litros/dia</p>
            <p class="mt-1 text-sm text-gray-600">
                (~ {{ resultado.ml }} ml)
            </p>
        </div>

        <!-- CTA -->
        <Button v-if="resultado" label="Testar versão completa" class="w-full" severity="warn"
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
.result {
    padding: 12px;
    background: #cffafe;
    border-radius: 8px;
    text-align: center;
}
</style>