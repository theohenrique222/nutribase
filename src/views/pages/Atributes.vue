<template>
    <section class="relative py-16 overflow-hidden border-y border-neutral-800 bg-neutral-900/50 sm:py-20">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(132,204,22,0.05)_1px,transparent_0)] [background-size:24px_24px]"></div>
        <div class="container relative px-4 mx-auto sm:px-6">
            <p class="mb-8 text-center text-xs font-bold tracking-[0.15em] text-neutral-500 uppercase sm:mb-10 sm:text-sm" data-aos="fade-up" data-aos-duration="800">
                Transforme sua saúde com dados personalizados
            </p>
            <div class="grid items-center justify-center grid-cols-2 gap-8 sm:flex sm:flex-wrap sm:gap-12 md:gap-16">
                <div v-for="(attr, index) in attributes" :key="index"
                    class="flex flex-col items-center gap-3 cursor-default group sm:flex-row"
                    data-aos="fade-up" data-aos-duration="800" :data-aos-delay="index * 150">
                    <div class="flex items-center justify-center w-14 h-14 transition-all duration-300 rounded-2xl bg-gradient-to-br from-lime-500/10 to-emerald-500/10 group-hover:from-lime-500/20 group-hover:to-emerald-500/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-lime-500/10">
                        <span v-html="attr.icon" class="text-lime-400 transition-transform group-hover:scale-110"></span>
                    </div>
                    <span class="text-sm font-bold text-center text-white sm:text-left sm:text-base">{{ attr.label }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            attributes: [
                {
                    label: "Segurança de Dados",
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>'
                },
                {
                    label: "Suporte Humano",
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>'
                },
                {
                    label: "Acesso Mobile",
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>'
                },
                {
                    label: "100% Nuvem",
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>'
                }
            ]
        }
    }
}
</script>
