import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    // 🌐 LANDING
    {
      path: '/',
      component: () => import('@/layouts/MainLoyout.vue'),
      children: [
        {
          path: '',
          name: 'index',
          component: () => import('@/views/Index.vue')
        },
        {
          path: 'basal_metabolism',
          component: () => import('../views/pages/BasalMetabolism.vue')
        },
        {
          path: 'bodyfat',
          component: () => import('../views/pages/BodyFat.vue')
        },
        {
          path: 'water_intake',
          component: () => import('../views/pages/WaterIntake.vue')
        },
        {
          path: 'macronutrients',
          component: () => import('../views/pages/MacroNutrientes.vue')
        }
      ]
    },

    // 🔐 AUTH (login separado)
    {
      path: '/',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login', // 👈 SEM /
          name: 'Login',
          component: () => import('../views/pages/autentication/Login.vue')
        }
      ]
    }
  ]
})

export default router