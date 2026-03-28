<template>
    <div class="space-y-3">
        <FormField label="Peso (kg)" v-model="weight" type="number" />
        <FormField label="Altura (cm)" v-model="height" type="number" />
        <FormField label="Idade" v-model="age" type="number" />

        <FormField label="Gênero" v-model="gender" type="select" :options="genderOptions" />

        <Button label="Calcular" class="w-full" @click="calcular" />

        <div v-if="resultado" class="result">
            {{ resultado }} kcal/dia
        </div>

        <Button v-if="resultado" label="Testar versão completa" class="w-full" severity="info"
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
.result {
    padding: 10px;
    background: #d9f99d;
    text-align: center;
    border-radius: 6px;
}
</style>