import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/basal_metabolism',
      name: 'Metabolismo Basal',
      component: () => import('../views/BasalMetabolism.vue')
    },
    {
      path: '/bodyfat',
      name: 'Body Fat',
      component: () => import('../views/BodyFat.vue')
    },
    {
      path: '/water_intake',
      name: 'Water Intake',
      component: () => import('../views/WaterIntake.vue')
    },
    {
      path: '/macronutrients',
      name: 'Macro Nutrientes',
      component: () => import('../views/MacroNutrientes.vue')
    },
  ]
})

export default router
