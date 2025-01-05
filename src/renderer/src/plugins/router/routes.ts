import { beforeSessionEnter } from '@/middlewares/before-session-enter'

export const routes = [
  { path: '/', redirect: '/auth/login' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    beforeEnter: beforeSessionEnter,
    children: [
      // Mi Perfil
      {
        path: 'account-settings',
        component: () => import('@/pages/account-settings.vue'),
        meta: {
          autenticate: true
        }
      },
      // Home
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/pages/home.vue'),
        meta: {
          autenticate: true
        }
      },
      // VENTAS
      {
        path: 'ventas/apertura',
        component: () => import('@/pages/ventas/apertura.vue'),
        meta: {
          autenticate: true
        }
      },
      {
        path: 'ventas/cierre-boleteria',
        component: () => import('@/pages/ventas/cierre-boleteria.vue'),
        meta: {
          autenticate: true
        }
      },

      {
        path: 'ventas/vender',
        component: () => import('@/pages/ventas/vender.vue'),
        meta: {
          autenticate: true
        }
      }
      //ADMINISTRACIÓN
      //TAREAS
      //REPORTES
      //FACTURACION ELECTRONICA
      //CONTABILIDAD
      /* {
        path: 'typography',
        component: () => import('@/pages/typography.vue'),
      },
      {
        path: 'icons',
        component: () => import('@/pages/icons.vue'),
      },
      {
        path: 'cards',
        component: () => import('@/pages/cards.vue'),
      },


      {
        path: 'tables',
        component: () => import('@/pages/tables.vue'),
      },
      {
        path: 'form-layouts',
        component: () => import('@/pages/form-layouts.vue'),
      }, */
    ]
  },
  {
    path: '/auth',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/pages/login.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue')
      }
    ]
  }
]