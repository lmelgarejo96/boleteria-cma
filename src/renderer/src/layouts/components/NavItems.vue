<script lang="ts" setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

const menu = ref<Array<any>>([
  {
    title: 'Inicio',
    icon: 'ri-home-2-line',
    to: '/home'
  },
  /* {
    type: 'group',
    data: {
      title: 'Ventas',
      badgeContent: '5',
      badgeClass: 'bg-error',
      icon: 'ri-home-smile-line'
    },
    children: [
      {
        title: 'Apertura',
        icon: 'ri-currency-line',
        to: '/ventas/apertura'
      },
      {
        title: 'Cierre de boleteria',
        icon: 'ri-currency-fill',
        to: '/ventas/cierre-boleteria'
      },
      {
        title: 'Vender',
        icon: 'ri-cash-line',
        to: '/ventas/vender'
      }
    ]
  }, */
  {
    type: 'section',
    data: {
      heading: 'Ventas'
    },
    children: [
      {
        title: 'Apertura',
        icon: 'ri-currency-line',
        to: '/ventas/apertura'
      },
      {
        title: 'Cierre de boleteria',
        icon: 'ri-currency-fill',
        to: '/ventas/cierre-boleteria'
      },
      {
        title: 'Vender',
        icon: 'ri-cash-line',
        to: '/ventas/vender'
      }
    ]
  }
])
</script>

<template>
  <template v-for="item in menu">
    <VerticalNavGroup v-if="item.type === 'group'" :item="item.data">
      <VerticalNavLink v-for="child in item.children" :item="child" />
    </VerticalNavGroup>
    <template v-else-if="item.type === 'section'">
      <VerticalNavSectionTitle :item="item.data" />
      <VerticalNavLink v-for="child in item.children" :item="child" />
    </template>
    <VerticalNavLink v-else :item="item" />
  </template>
</template>
