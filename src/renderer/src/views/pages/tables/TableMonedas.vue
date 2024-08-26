<script setup lang="ts">
import { ref, watch, computed } from 'vue';

const coins = [
  { value: 0.10, quantity: ref<number | null>(null), amount: ref<number>(0) },
  { value: 0.20, quantity: ref<number | null>(null), amount: ref<number>(0) },
  { value: 0.50, quantity: ref<number | null>(null), amount: ref<number>(0) },
  { value: 1.00, quantity: ref<number | null>(null), amount: ref<number>(0) },
  { value: 2.00, quantity: ref<number | null>(null), amount: ref<number>(0) },
  { value: 5.00, quantity: ref<number | null>(null), amount: ref<number>(0) }
];

coins.forEach(bill => {
  watch(bill.quantity, (newQuantity) => {
    bill.amount.value = newQuantity !== null ? newQuantity * bill.value : 0;
  });
});

// Calculamos el total de todos los billetes
const totalAmount = computed(() =>
  coins.reduce((sum, bill) => sum + bill.amount.value, 0)
);

</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-uppercase"></th>
        <th class="text-uppercase text-center">cantidad</th>
        <th class="text-uppercase text-center">monto (S/.)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(bill, index) in coins" :key="index">
        <td>
          <img :src="`../../../assets/images/billetes/${bill.value}.png`" :alt="`imagen referencial de moneda de ${bill.value}`">
        </td>
        <td class="text-center">
          <VTextField
            v-model="bill.quantity"
            type="number"
            class="text-end"
          />
        </td>
        <td class="text-center center-amount">
          <VTextField
            :model-value="bill.amount"
            type="number"
            class="text-end"
            readonly
          />
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2" class="text-uppercase">total de monedas:</td>
        <td class="text-center">
          <VTextField
            :model-value="totalAmount"
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
