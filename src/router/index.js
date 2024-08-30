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
    }
  ]
})

export default router
