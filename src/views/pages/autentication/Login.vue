<template>
    <div class="w-full min-h-screen pt-20">        
        <div class="flex justify-center p-6 pt-20 bg-white md:p-10 lg:items-center lg:pt-0 dark:bg-zinc-950">
            <div class="w-full max-w-md space-y-6 sm:space-y-8">
                <div class="flex justify-center lg:hidden">
                    <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="w-10 h-10 lucide lucide-aperture-icon text-zinc-900 dark:text-zinc-100">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m14.31 8 5.74 9.94"></path>
                            <path d="M9.69 8h11.48"></path>
                            <path d="m7.38 12 5.74-9.94"></path>
                            <path d="M9.69 16 3.95 6.06"></path>
                            <path d="M14.31 16H2.83"></path>
                            <path d="m16.62 12-5.74 9.94"></path>
                        </svg><span class="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                            Praisefy Flow </span></div>
                </div>
                <div class="space-y-2 text-center lg:text-left">
                    <h2 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"> Bem-vindo de volta
                    </h2>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400"> 
                        Insira suas credenciais para acessar o painel administrativo.
                    </p>
                </div>
                <form class="space-y-6" action="/login" method="post">
                    <div class="space-y-2"><label for="email" data-slot="label"
                            class="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Email </label><input data-slot="input"
                            class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11"
                            id="email" type="email" name="email" tabindex="1"
                            autocomplete="email" placeholder="seu@email.com">
                        <div style="display: none;">
                            <p class="text-sm text-red-600 dark:text-red-500"></p>
                        </div>
                    </div>
                    <div class="space-y-2"><label for="password" data-slot="label"
                            class="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Senha </label>
                        <div class="relative"><input data-slot="input"
                                class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pr-10"
                                id="password" type="password" name="password" placeholder="••••••••"
                                autocomplete="current-password" tabindex="2"><button data-slot="button"
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground dark:hover:bg-accent/50 size-9 absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                                type="button" tabindex="-1"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="w-4 h-4 lucide lucide-eye-icon text-muted-foreground">
                                    <path
                                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0">
                                    </path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg><span class="sr-only">Show password</span></button></div>
                        <div style="display: none;">
                            <p class="text-sm text-red-600 dark:text-red-500"></p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between"><label for="remember" data-slot="label"
                            class="gap-2 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 flex cursor-pointer items-center space-x-2 text-sm"><button
                                data-slot="checkbox"
                                class="peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                                tabindex="3" id="remember" role="checkbox" type="button" aria-checked="false"
                                aria-required="false" data-state="unchecked"
                                aria-label="Lembrar de mim"><!----><!-- We render single input if it's required --><input
                                    data-hidden="" tabindex="-1" name="remember" type="checkbox" value="on"
                                    style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); white-space: nowrap; overflow-wrap: normal; top: -1px; left: -1px;"></button><span
                                class="text-zinc-700 dark:text-zinc-300">Lembrar de mim</span></label><a
                            class="text-sm font-medium transition-colors text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-300"
                            href="/forgot-password"> Esqueceu a senha? </a></div><button data-slot="button"
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-4 py-2 has-[&gt;svg]:px-3 h-11 w-full bg-zinc-900 text-white hover:cursor-pointer hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                        type="submit" tabindex="4" data-test="login-button"><!----> Entrar</button>
                </form>
                <div class="pt-6 space-y-4">
                    <p class="text-xs text-center text-zinc-600 dark:text-zinc-400"> Ainda não tem conta? Entre em
                        contato com seu administrador. </p>
                    <p class="text-xs text-center text-zinc-500 dark:text-zinc-500"> © 2026 Nutribase. Todos os
                        direitos reservados. </p>
                </div>
            </div>
        </div>
    </div>
</template>