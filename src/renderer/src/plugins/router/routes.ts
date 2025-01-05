export const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      // Mi Perfil
      {
        path: 'account-settings',
        component: () => import('@/pages/account-settings.vue'),
      },
      // Home
      {
        path: 'home',
        name: "Home",
        component: () => import('@/pages/home.vue'),
      },
      // VENTAS
      {
        path: 'ventas/apertura',
        component: () => import('@/pages/ventas/apertura.vue'),
      },
      {
        path: 'ventas/cierre-boleteria',
        component: () => import('@/pages/ventas/cierre-boleteria.vue'),
      },

      {
        path: 'ventas/vender',
        component: () => import('@/pages/ventas/vender.vue'),
      },
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
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/pages/register.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
    ],
  },
]
