import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
import AuthView from '@/views/AuthView.vue'
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'       

    const router = createRouter({
        history: createWebHistory(),
        routes: [
          { path: '/', component: DashboardView },
          { path: '/auth', component: AuthView },
          { path: '/signin', component: SignIn },
          { path: '/signup', component: SignUp }

        ]
      });

      export default router
       
        // tengo que volver a agregar el router como una funcion, porue me dejo de funcionar el Auth, 
        // sin razón aparente.