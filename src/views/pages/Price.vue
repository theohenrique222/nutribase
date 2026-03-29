<template>
    <section id="pricing" class="py-16 bg-gradient-to-b from-neutral-800 to-neutral-950 sm:py-24">
        <div class="container px-4 mx-auto sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
                <div data-slot="badge"
                    class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap mb-4 border-amber-500 bg-amber-500/20 text-amber-500"
                    variant="outline">
                    PLANOS ACESSÍVEIS
                </div>
                <h2 class="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Preços justos para sua realidade.
                </h2>
                <p class="max-w-2xl mx-auto mt-4 text-lg text-neutral-400">
                    Sem taxas ocultas. Escolha o plano ideal e <span class="font-bold text-white">comece gratuitamente
                        com acesso ás princeipais funcionalidades</span>. Cresça com a gente, sem surpresas no caminho.
                </p>
            </div>
            <div class="grid grid-cols-1 gap-8 mx-auto mt-16 max-w-7xl md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                <div data-slot="card"
                    class="text-card-foreground gap-6 border py-6 relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gray-800 backdrop-blur-xl transition-all duration-500 border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] hover:border-slate-300/80 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.08)] dark:border-slate-700/60 dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] dark:hover:border-slate-600/80">

                    <div data-slot="card-header"
                        class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                        <h3 data-slot="card-title" class="text-2xl font-black text-white">
                            Plano Start
                        </h3>
                        <p data-slot="card-description" class="mt-2 text-sm text-white">
                            <span class="font-bold text-white">
                                Até 5 usuários
                            </span>
                            <span class="block text-white/50">
                                Ideal para começar
                            </span>
                        </p>
                        <div class="flex items-baseline mt-6 gap-x-2">
                            <span class="text-4xl font-black tracking-tight text-white">
                                <span class="text-2xl">
                                    R$</span> 0,00
                            </span>
                            <span class="text-sm font-semibold leading-6 text-white/50">
                                /mês
                            </span>
                        </div>
                    </div>
                    <div data-slot="card-content" class="flex-grow px-6">
                        <ul role="list" class="mt-4 space-y-3 text-sm leading-6 text-white/50">
                            <li class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="flex-none w-5 h-5 lucide lucide-check-icon text-lime-500" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Cálculo de metabolismo basal
                            </li>

                            <li class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="flex-none w-5 h-5 lucide lucide-check-icon text-lime-500" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Cálculo de macronutrientes
                            </li>

                            <li class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="flex-none w-5 h-5 lucide lucide-check-icon text-lime-500" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Consumo diário de água
                            </li>


                            <li class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="flex-none w-5 h-5 lucide lucide-check-icon text-lime-500" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Percentual de gordura corporal
                            </li>


                            <li class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="flex-none w-5 h-5 lucide lucide-check-icon text-lime-500" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Acesso à dashboard teste
                            </li>

                        </ul>
                    </div>
                    <div data-slot="card-footer" class="flex items-center px-6 [.border-t]:pt-6 pt-6 pb-8">
                        <button data-slot="button"
                            class="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-bold text-white transition-all bg-gray-800 border hover:shadow-md hover:-translate-y-2 shadow-lime-500 h-11 rounded-2xl">
                            Criar conta grátis
                        </button>
                    </div>
                </div>

                <div
                    class="relative flex flex-col justify-between p-6 transition-all duration-300 scale-105 bg-gray-800 border-2 shadow-xl border-lime-500 rounded-2xl">

                    <span
                        class="absolute px-3 py-1 text-xs font-bold text-white -translate-x-1/2 rounded-full bg-lime-500 -top-3 left-1/2">
                        MAIS POPULAR
                    </span>

                    <div>
                        <h3 class="text-2xl font-bold text-white">Plano Pro</h3>

                        <p class="mt-2 text-sm text-neutral-400">
                            Para quem quer evolução completa
                        </p>

                        <div class="mt-6">
                            <span class="text-4xl font-black text-white">R$ 29,90</span>
                            <span class="text-sm text-neutral-400">/mês</span>
                        </div>

                        <ul class="mt-6 space-y-3 text-sm text-neutral-300">
                            <li class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="flex-none w-5 h-5 lucide lucide-check-icon text-lime-500" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Tudo do plano gratuito
                            </li>
                            <li class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="flex-none w-5 h-5 lucide lucide-check-icon text-lime-500" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Histórico de dados
                            </li>
                            <li class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="flex-none w-5 h-5 lucide lucide-check-icon text-lime-500" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Recomendações inteligentes
                            </li>
                            <li class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="flex-none w-5 h-5 lucide lucide-check-icon text-lime-500" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Dashboard completa
                            </li>
                        </ul>
                    </div>

                    <div data-slot="card-footer" class="flex items-center px-6 [.border-t]:pt-6 pt-6 pb-8">
                        <button data-slot="button"
                            class="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-bold text-white transition-all border hover:shadow-md bg-lime-500 hover:-translate-y-2 shadow-lime-500 h-11 rounded-2xl">
                            Começar agora
                        </button>
                    </div>
                </div>


                

                <div data-slot="card"
                    class="text-card-foreground gap-6 border py-6 relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gray-800 backdrop-blur-xl transition-all duration-500 border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] hover:border-slate-300/80 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.08)] dark:border-slate-700/60 dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] dark:hover:border-slate-600/80">

                    <div data-slot="card-header"
                        class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                        <h3 data-slot="card-title" class="text-2xl font-black text-white">
                            Plano Start
                        </h3>
                        <p data-slot="card-description" class="mt-2 text-sm text-white">
                            <span class="font-bold text-white">
                                Até 5 usuários
                            </span>
                            <span class="block text-white/50">
                                Ideal para começar
                            </span>
                        </p>
                        <div class="flex items-baseline mt-6 gap-x-2">
                            <span class="text-4xl font-black tracking-tight text-white">
                                <span class="text-2xl">
                                    R$</span> 59,90
                            </span>
                            <span class="text-sm font-semibold leading-6 text-white/50">
                                /mês
                            </span>
                        </div>
                    </div>
                    <div data-slot="card-content" class="flex-grow px-6">
                        <ul role="list" class="mt-4 space-y-3 text-sm leading-6 text-white/50">
                            <li class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="flex-none w-5 h-5 lucide lucide-check-icon text-lime-500" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Tudo do plano Pro
                            </li>

                            <li class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="flex-none w-5 h-5 lucide lucide-check-icon text-lime-500" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Planos alimentares
                            </li>

                            <li class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="flex-none w-5 h-5 lucide lucide-check-icon text-lime-500" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Insights avançados
                            </li>


                            <li class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="flex-none w-5 h-5 lucide lucide-check-icon text-lime-500" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Suporte prioritário
                            </li>


                        </ul>
                    </div>
                    <div data-slot="card-footer" class="flex items-center px-6 [.border-t]:pt-6 pt-6 pb-8">
                        <button data-slot="button"
                            class="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-bold text-white transition-all bg-gray-800 border hover:shadow-md hover:-translate-y-2 shadow-lime-500 h-11 rounded-2xl">
                            Começar agora
                        </button>
                    </div>
                </div>

            </div>
            
        </div>
    </section>
</template>