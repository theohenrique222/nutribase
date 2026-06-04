<template>
    <section id="formulario" class="relative py-16 overflow-hidden bg-neutral-950 sm:py-20 md:py-24 lg:py-32">
        <div class="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950"></div>
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div class="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div class="container relative px-4 mx-auto sm:px-6">
            <div class="max-w-2xl mx-auto mb-10 text-center sm:mb-12 md:mb-16" data-aos="fade-up" data-aos-duration="1000">
                <p class="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase border rounded-full w-fit mx-auto text-amber-400 border-amber-500/30 bg-amber-500/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                        <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
                    </svg>
                    Sem compromisso
                </p>
                <h2 class="px-2 mb-4 text-3xl font-black tracking-tight text-white sm:mb-6 sm:text-4xl md:text-5xl">
                    Comece sua <span class="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">evolução</span> hoje
                </h2>
                <p class="px-2 text-base font-medium leading-relaxed text-neutral-400 sm:text-lg md:text-xl">
                    Veja o NutriBase funcionando na sua rotina. Sem compromisso.
                </p>
            </div>

            <div class="relative z-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
                <div class="overflow-hidden transition-all duration-700 border rounded-3xl border-neutral-800 bg-neutral-900/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-lime-500/30">
                    <div class="relative px-6 py-8 overflow-hidden text-center sm:px-8 sm:py-10 md:px-10 md:py-12 bg-gradient-to-br from-lime-500/20 via-lime-600/10 to-transparent">
                        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                        <div class="relative">
                            <h3 class="mb-2 text-2xl font-black tracking-tight text-white drop-shadow-lg sm:mb-3 sm:text-3xl md:text-4xl">
                                Comece Agora
                            </h3>
                            <p class="max-w-md px-2 mx-auto text-sm font-medium leading-relaxed text-lime-300/80 sm:text-base">
        Veja o NutriBase em ação na sua realidade. Sem compromisso.</p>
                        </div>
                    </div>

                    <div class="p-8 bg-neutral-900/50 sm:p-10 md:p-12">
                        <form class="space-y-6 sm:space-y-8" @submit.prevent="submitForm">
                            <div class="space-y-2 sm:space-y-3">
                                <label for="name" class="text-sm font-bold text-white sm:text-base">
                                    Nome Completo *
                                </label>
                                <input v-model="form.name" id="name" type="text" placeholder="João Silva" required
                                    class="flex w-full h-12 px-4 text-sm text-white transition-all border rounded-xl bg-neutral-800/80 border-neutral-700 placeholder-neutral-500 focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/20 focus:outline-none sm:h-14 sm:text-base">
                            </div>

                            <div class="space-y-2 sm:space-y-3">
                                <label for="email" class="text-sm font-bold text-white sm:text-base">
                                    E-mail *
                                </label>
                                <input v-model="form.email" id="email" type="email" placeholder="joao@email.com.br" required
                                    class="flex w-full h-12 px-4 text-sm text-white transition-all border rounded-xl bg-neutral-800/80 border-neutral-700 placeholder-neutral-500 focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/20 focus:outline-none sm:h-14 sm:text-base">
                            </div>

                            <div class="space-y-2 sm:space-y-3">
                                <label for="phone" class="text-sm font-bold text-white sm:text-base">
                                    WhatsApp / Celular *
                                </label>
                                <input v-model="form.phone" id="phone" type="tel" placeholder="(11) 99999-9999" required
                                    class="flex w-full h-12 px-4 text-sm text-white transition-all border rounded-xl bg-neutral-800/80 border-neutral-700 placeholder-neutral-500 focus:border-lime-500/50 focus:ring-2 focus:ring-lime-500/20 focus:outline-none sm:h-14 sm:text-base">
                            </div>

                            <div class="pt-2 sm:pt-4">
                                <button type="submit"
                                    class="group relative flex items-center justify-center w-full h-16 overflow-hidden text-base font-black tracking-wide text-neutral-950 uppercase transition-all duration-300 rounded-xl bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-500 hover:from-lime-500 hover:via-lime-600 hover:to-emerald-600 hover:shadow-xl hover:shadow-lime-500/25 hover:-translate-y-0.5 active:scale-[0.98] sm:h-20 sm:rounded-2xl sm:text-lg md:text-xl">
                                    <div class="absolute inset-0 translate-x-[-200%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[200%]"></div>
                                    <span class="relative flex items-center justify-center gap-2 sm:gap-3">
                                        <span class="hidden sm:inline">Solicitar Demonstração Gratuita</span>
                                        <span class="sm:hidden">Solicitar Demonstração</span>
                                        <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                        </svg>
                                    </span>
                                </button>

                                <div class="mt-4 text-center">
                                    <a href="/login" class="text-sm font-medium text-neutral-400 transition-colors hover:text-lime-400">
                                        Já tem uma conta? <span class="font-bold text-lime-400">Faça Login</span>
                                    </a>
                                </div>
                            </div>

                            <div class="flex flex-col items-center justify-center gap-4 pt-6 border-t border-neutral-800 sm:flex-row sm:gap-8">
                                <div class="flex items-center gap-2 text-xs font-medium text-neutral-400 sm:gap-3 sm:text-sm">
                                    <div class="flex items-center justify-center w-8 h-8 rounded-full bg-lime-500/10">
                                        <svg class="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                        </svg>
                                    </div>
                                    Seus dados estão seguros
                                </div>
                                <div class="hidden w-1.5 h-1.5 rounded-full bg-neutral-700 sm:block"></div>
                                <div class="flex items-center gap-2 text-xs font-medium text-neutral-400 sm:gap-3 sm:text-sm">
                                    <div class="flex items-center justify-center w-8 h-8 rounded-full bg-lime-500/10">
                                        <svg class="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                        </svg>
                                    </div>
                                    Resposta em até 2 dias úteis
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    setup() {
        const form = reactive({
            name: '',
            email: '',
            phone: ''
        });

        const submitForm = () => {
            console.log('Form submitted:', form);
        };

        return { form, submitForm };
    }
}
</script>
