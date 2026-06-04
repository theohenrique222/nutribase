<template>
    <div class="space-y-3">

        <!-- GÊNERO -->
        <FormField label="Gênero" v-model="gender" type="select" :options="genderOptions" />

        <!-- ALTURA -->
        <FormField label="Altura (cm)" v-model="height" type="number" />

        <!-- CINTURA -->
        <FormField label="Cintura (cm)" v-model="waist" type="number" />

        <!-- PESCOÇO -->
        <FormField label="Pescoço (cm)" v-model="neck" type="number" />

        <!-- QUADRIL (SÓ MULHER) -->
        <FormField v-if="gender === 'feminino'" label="Quadril (cm)" v-model="hip" type="number" />

        <!-- BOTÃO -->
        <Button label="Calcular" severity="contrast" class="w-full" @click="calcular" />

        <!-- RESULTADO -->
        <div v-if="resultado"
            class="relative overflow-hidden p-5 rounded-xl bg-gradient-to-br from-lime-500/10 to-emerald-500/5 border border-lime-500/20 text-center">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(132,204,22,0.08),transparent_60%)]"></div>
            <div class="relative">
                <p class="text-xs font-semibold tracking-wider uppercase text-lime-400/70 mb-1">Gordura Corporal Estimada</p>
                <p class="text-3xl font-black text-lime-400">{{ resultado }}<span class="text-lg font-semibold text-lime-400/70">%</span></p>
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
            gender: null,
            height: null,
            waist: null,
            neck: null,
            hip: null,

            resultado: null,

            genderOptions: [
                { label: 'Masculino', value: 'masculino' },
                { label: 'Feminino', value: 'feminino' }
            ]
        };
    },

    methods: {
        calcular() {
            if (!this.gender || !this.height || !this.waist || !this.neck) {
                alert("Preencha todos os campos obrigatórios");
                return;
            }

            let gordura = 0;

            if (this.waist <= this.neck) {
                alert("A cintura deve ser maior que o pescoço");
                return;
            }

            if (this.gender === 'masculino') {
                gordura =
                    495 /
                    (1.0324 -
                        0.19077 * Math.log10(this.waist - this.neck) +
                        0.15456 * Math.log10(this.height)) -
                    450;
            }

            if (this.gender === 'feminino') {
                if (!this.hip) {
                    alert("Informe o quadril");
                    return;
                }

                gordura =
                    495 /
                    (1.29579 -
                        0.35004 *
                        Math.log10(this.waist + this.hip - this.neck) +
                        0.221 * Math.log10(this.height)) -
                    450;
            }

            this.resultado = gordura.toFixed(2);
        }
    }
};
</script>

<style scoped>
</style>