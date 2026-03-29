<template>
    <div class="space-y-3">

        <!-- PESO -->
        <FormField label="Peso (kg)" v-model="weight" type="number" />

        <!-- OBJETIVO -->
        <FormField label="Objetivo" v-model="goal" type="select" :options="goalOptions" />

        <!-- NÍVEL DE ATIVIDADE -->
        <FormField label="Nível de Atividade" v-model="activity" type="select" :options="activityOptions" />

        <!-- BOTÃO -->
        <Button label="Calcular" severity="success" class="w-full" @click="calcular" />

        <!-- RESULTADO -->
        <div v-if="resultado" class="result">
            <p class="mb-2 font-bold">Distribuição diária:</p>

            <p>🔥 Calorias: {{ resultado.calorias }} kcal</p>
            <p>🥩 Proteínas: {{ resultado.proteinas }}g</p>
            <p>🍞 Carboidratos: {{ resultado.carboidratos }}g</p>
            <p>🥑 Gorduras: {{ resultado.gorduras }}g</p>
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
.result {
    padding: 12px;
    background: #dbeafe;
    border-radius: 8px;
    text-align: center;
}
</style>