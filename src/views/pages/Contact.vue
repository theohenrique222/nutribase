<template>
    <section id="formulario"
        class="relative py-16 overflow-hidden bg-gradient-to-br from-neutral-950 via-background to-neutral-700/40 sm:py-20 md:py-24 lg:py-32">
        
        <div class="container relative px-4 mx-auto sm:px-6">
            <div class="max-w-2xl mx-auto mb-10 text-center sm:mb-12 md:mb-16">
                <div data-slot="badge"
                    class="justify-center w-fit mb-6 inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border-2 border-amber-500 px-4 py-1.5 text-xs font-semibold text-amber-500 shadow-sm sm:mb-8 sm:gap-2 sm:px-5 sm:py-2 sm:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-sparkles-icon sm:h-4 sm:w-4">
                        <path
                            d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z">
                        </path>
                        <path d="M20 3v4"></path>
                        <path d="M22 5h-4"></path>
                        <path d="M4 17v2"></path>
                        <path d="M5 18H3"></path>
                    </svg>
                    <span>
                        Sem compromisso
                    </span>
                </div>
                <h2
                    class="px-2 mb-4 text-3xl font-black tracking-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-5xl">
                    Comece sua evolução hoje 
                </h2>
                <p
                    class="px-2 text-base font-medium leading-relaxed text-white sm:text-lg md:text-xl lg:text-xl">
                    Veja o NutriBase funcionando na sua rotina. Sem compromisso.
                </p>
            </div>
            <div class="relative z-10 max-w-2xl mx-auto">
                <div
                    class="overflow-hidden rounded-3xl border border-border bg-lime-500 transition-all duration-700 hover:border-brand-border hover:shadow-lime-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div
                        class="relative px-6 py-8 overflow-hidden text-center bg-gradient-to-r from-lime-500 via-lime-600 to-lime-500/50 sm:px-8 sm:py-10 md:px-10 md:py-12">
                        <div class="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:20px_20px]"
                            style="animation-duration: 4s;">
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10">
                        </div>
                        <div class="relative">
                            <h3
                                class="mb-2 text-2xl font-black tracking-tight text-white drop-shadow-lg sm:mb-3 sm:text-3xl md:text-4xl lg:text-5xl">
                                Comece Agora
                            </h3>
                            <p
                                class="max-w-md px-2 mx-auto text-sm font-semibold leading-relaxed text-lime-50 sm:text-base md:text-lg">
                                Veja o Praisefy em ação na sua realidade. Sem compromisso.</p>
                        </div>
                    </div>
                    <div class="p-8 bg-gray-800 sm:p-10 md:p-12 lg:p-16">
                        <form class="space-y-6 sm:space-y-8 md:space-y-10">
                            <div class="space-y-2 sm:space-y-3">
                                <label for="name" data-slot="label"
                                    class="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm font-bold text-white sm:text-base">
                                    Nome Completo * 
                                </label>
                                <input data-slot="input"
                                    class="file:text-white placeholder:text-muted-white selection:bg-primary selection:text-primary-white dark:bg-input/30 flex w-full min-w-0 border px-3 py-1 shadow-xs outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-12 rounded-xl border-input bg-white text-sm text-black transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 sm:h-14 sm:text-base"
                                    id="name" type="text" placeholder="João Silva" required="">
                            </div>
                            
                            <div class="space-y-2 sm:space-y-3">
                                <label for="email" data-slot="label"
                                    class="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm font-bold text-white sm:text-base">
                                    E-mail * 
                                </label>
                                <input data-slot="input"
                                    class="file:text-white placeholder:text-muted-white selection:bg-primary selection:text-primary-white dark:bg-input/30 flex w-full min-w-0 border px-3 py-1 shadow-xs outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-12 rounded-xl border-input bg-white text-sm text-black transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 sm:h-14 sm:text-base"
                                    id="email" type="email" placeholder="joao@email.com.br" required="">
                            </div>
                            <div class="space-y-2 sm:space-y-3">
                                <label for="phone" data-slot="label"
                                    class="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm font-bold text-white sm:text-base">
                                    WhatsApp / Celular * 
                                </label>
                                <input data-slot="input"
                                    class="file:text-white placeholder:text-muted-white selection:bg-primary selection:text-primary-white dark:bg-input/30 flex w-full min-w-0 border px-3 py-1 shadow-xs outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-12 rounded-xl border-input bg-white text-sm text-black transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 sm:h-14 sm:text-base"
                                    id="phone" type="tel" placeholder="(11) 99999-9999" required="">
                            </div>
                            <div class="pt-2 sm:pt-4">
                                <button data-slot="button"
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 px-4 py-2 has-[&gt;svg]:px-3 group relative h-16 w-full overflow-hidden rounded-xl bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 text-base font-black tracking-wide text-white uppercase shadow-2xl shadow-lime-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:from-lime-600 hover:via-lime-700 hover:to-lime-800 hover:shadow-lime-500/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:h-20 sm:rounded-2xl sm:text-lg md:text-xl"
                                    type="submit">
                                    <div
                                        class="absolute inset-0 translate-x-[-200%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[200%]">
                                    </div>
                                    <span class="relative flex items-center justify-center gap-2 sm:gap-3">
                                        <span class="hidden sm:inline">
                                            Solicitar Demonstração Gratuita
                                        </span>
                                        <span class="sm:hidden">
                                            Solicitar Demonstração
                                        </span>
                                    </span>
                                </button>
                                <div class="mt-4 text-center">
                                    <a class="text-sm font-medium text-white transition-colors underline-offset-4 hover:text-brand hover:underline"
                                        href="/login"> 
                                        Já tem uma conta? <span class="font-bold text-brand">Faça Login</span>
                                    </a>
                                </div>
                            </div>
                            <div
                                class="flex flex-col items-center justify-center gap-4 pt-4 border-t border-border sm:flex-row sm:gap-6 sm:pt-6">
                                <div
                                    class="flex items-center gap-2 text-xs font-medium text-white sm:gap-3 sm:text-sm">
                                    <div
                                        class="flex items-center justify-center rounded-full h-7 w-7 bg-success-subtle sm:h-8 sm:w-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-shield-icon text-success-subtle-white sm:h-[18px] sm:w-[18px]">
                                            <path
                                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span>
                                        Seus dados estão seguros
                                    </span>
                                </div>
                                <div class="hidden h-1.5 w-1.5 rounded-full bg-white/30 sm:block">
                                    
                                </div>
                                <div
                                    class="flex items-center gap-2 text-xs font-medium text-white sm:gap-3 sm:text-sm">
                                    <div
                                        class="flex items-center justify-center rounded-full h-7 w-7 bg-brand-subtle sm:h-8 sm:w-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-zap-icon text-brand sm:h-[18px] sm:w-[18px]">
                                            <path
                                                d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                                            </path>
                                        </svg>
                                    </div><span>Resposta em até 2 dias úteis</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

import { ref } from 'vue';

const password = ref('');
const checked1 = ref(true);
</script>
