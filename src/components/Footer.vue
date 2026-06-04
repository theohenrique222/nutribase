<template>
  <footer class="relative border-t bg-neutral-950 border-neutral-800">
    <div class="container px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-16">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div class="space-y-4">
          <a href="/" class="text-2xl font-black tracking-tight text-white">
            <span class="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">Nutri</span>base
          </a>
          <p class="text-sm leading-relaxed text-neutral-400">
            Sua saúde simplificada. Calcule, ajuste e evolua com dados precisos.
          </p>
          <div class="flex gap-3 pt-2">
            <a href="#!" class="flex items-center justify-center w-9 h-9 text-sm transition-all rounded-lg bg-neutral-800 text-neutral-400 hover:bg-lime-500/20 hover:text-lime-400">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#!" class="flex items-center justify-center w-9 h-9 text-sm transition-all rounded-lg bg-neutral-800 text-neutral-400 hover:bg-lime-500/20 hover:text-lime-400">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a href="#!" class="flex items-center justify-center w-9 h-9 text-sm transition-all rounded-lg bg-neutral-800 text-neutral-400 hover:bg-lime-500/20 hover:text-lime-400">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="text-sm font-bold tracking-wider text-white uppercase">Navegação</h4>
          <ul class="space-y-3">
            <li v-for="item in footerLinks" :key="item.id">
              <a :href="item.href" class="text-sm transition-colors text-neutral-400 hover:text-lime-400">{{ item.name }}</a>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h4 class="text-sm font-bold tracking-wider text-white uppercase">Calculadoras</h4>
          <ul class="space-y-3">
            <li><a href="/basal_metabolism" class="text-sm transition-colors text-neutral-400 hover:text-lime-400">Metabolismo Basal</a></li>
            <li><a href="/bodyfat" class="text-sm transition-colors text-neutral-400 hover:text-lime-400">Gordura Corporal</a></li>
            <li><a href="/macronutrients" class="text-sm transition-colors text-neutral-400 hover:text-lime-400">Macronutrientes</a></li>
            <li><a href="/water_intake" class="text-sm transition-colors text-neutral-400 hover:text-lime-400">Água Diária</a></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h4 class="text-sm font-bold tracking-wider text-white uppercase">Suporte</h4>
          <ul class="space-y-3">
            <li><a href="#formulario" class="text-sm transition-colors text-neutral-400 hover:text-lime-400">Fale Conosco</a></li>
            <li><a href="/login" class="text-sm transition-colors text-neutral-400 hover:text-lime-400">Área do Cliente</a></li>
            <li>
              <a href="#!" class="inline-flex items-center gap-2 px-4 py-2 mt-2 text-xs font-bold transition-all rounded-lg bg-lime-500/10 text-lime-400 hover:bg-lime-500/20">
                Solicitar Demonstração
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col items-center justify-between pt-8 mt-12 border-t border-neutral-800 sm:flex-row">
        <p class="text-xs text-neutral-500">
          © 2026 NutriBase. Todos os direitos reservados.
        </p>
        <div class="flex gap-6 mt-4 sm:mt-0">
          <a href="#!" class="text-xs transition-colors text-neutral-500 hover:text-neutral-400">Privacidade</a>
          <a href="#!" class="text-xs transition-colors text-neutral-500 hover:text-neutral-400">Termos</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        { id: 1, name: 'Início', href: '#hero' },
        { id: 2, name: 'Funcionalidades', href: '#features' },
        { id: 3, name: 'Calculadoras', href: '#calculations' },
        { id: 4, name: 'Contato', href: '#formulario' },
      ]
    }
  }
}
</script>
