import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
import AuthView from '@/views/AuthView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/auth',
      name: 'login',
      component: AuthView
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     component: NotFoundView (sin crear),
    // }
  ]
})

export default router