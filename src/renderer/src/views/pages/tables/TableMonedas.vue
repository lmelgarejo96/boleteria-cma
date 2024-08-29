<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import coin010 from '@/assets/images/monedas/0.10.png';
import coin020 from '@/assets/images/monedas/0.20.png';
import coin050 from '@/assets/images/monedas/0.50.png';
import coin100 from '@/assets/images/monedas/1.00.png';
import coin200 from '@/assets/images/monedas/2.00.png';
import coin500 from '@/assets/images/monedas/5.00.png';

const emit = defineEmits(['update:totalQuantity']);

const coins = [
  { value: 0.10, quantity: ref<number | null>(null), amount: ref<number>(0), image: coin010 },
  { value: 0.20, quantity: ref<number | null>(null), amount: ref<number>(0), image: coin020 },
  { value: 0.50, quantity: ref<number | null>(null), amount: ref<number>(0), image: coin050 },
  { value: 1.00, quantity: ref<number | null>(null), amount: ref<number>(0), image: coin100 },
  { value: 2.00, quantity: ref<number | null>(null), amount: ref<number>(0), image: coin200 },
  { value: 5.00, quantity: ref<number | null>(null), amount: ref<number>(0), image: coin500 }
];

coins.forEach(coin => {
  watch(coin.quantity, (newQuantity) => {
    coin.amount.value = newQuantity !== null ? newQuantity * coin.value : 0;
  });
});

// Calculamos el total de todas las monedas
const totalQuantity = computed(() =>
  coins.reduce((sum, coin) => sum + coin.amount.value, 0)
);

watch(totalQuantity, (newTotal) => {
  emit('update:totalQuantity', newTotal);
});
</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-uppercase"></th>
        <th class="text-uppercase text-center">Cantidad</th>
        <th class="text-uppercase text-center">Monto (S/.)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(coin, index) in coins" :key="index">
        <td>
          <img :src="coin.image" :alt="`Imagen referencial de moneda de ${coin.value}`" />
        </td>
        <td class="text-center">
          <VTextField
            v-model="coin.quantity"
            type="number"
            class="text-end"
          />
        </td>
        <td class="text-center center-amount">
          <VTextField
            :model-value="coin.amount"
            type="number"
            class="text-end"
            readonly
          />
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2" class="text-uppercase">Total de monedas:</td>
        <td class="text-center">
          <VTextField
            :model-value="totalQuantity"
            type="number"
            class="text-end"
            disabled
          />
        </td>
      </tr>
    </tfoot>
  </VTable>
</template>

<style lang="scss">
.center-amount {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
