import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      patch: '/asd',
      name:  'Index',
      component: Index
    },
    {
      path: '/basal_metabolism',
      name: 'Metabolismo Basal',
      component: () => import('../views/pages/BasalMetabolism.vue')
    },
    {
      path: '/bodyfat',
      name: 'Body Fat',
      component: () => import('../views/pages/BodyFat.vue')
    },
    {
      path: '/water_intake',
      name: 'Water Intake',
      component: () => import('../views/pages/WaterIntake.vue')
    },
    {
      path: '/macronutrients',
      name: 'Macro Nutrientes',
      component: () => import('../views/pages/MacroNutrientes.vue')
    },
  ]
})

export default router
