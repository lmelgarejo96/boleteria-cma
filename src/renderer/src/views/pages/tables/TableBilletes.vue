<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import bill10 from '@/assets/images/billetes/10.png';
import bill20 from '@/assets/images/billetes/20.png';
import bill50 from '@/assets/images/billetes/50.png';
import bill100 from '@/assets/images/billetes/100.png';

const props = defineProps({
  initialTotalAmount: {
    type: Number,
    default: 0,
  }
});

const emit = defineEmits(['update:totalAmount']);

const bills = [
  { value: 10, quantity: ref<number | null>(null), amount: ref<number>(0), image: bill10 },
  { value: 20, quantity: ref<number | null>(null), amount: ref<number>(0), image: bill20 },
  { value: 50, quantity: ref<number | null>(null), amount: ref<number>(0), image: bill50 },
  { value: 100, quantity: ref<number | null>(null), amount: ref<number>(0), image: bill100 }
];

bills.forEach(bill => {
  watch(bill.quantity, (newQuantity) => {
    bill.amount.value = newQuantity !== null ? newQuantity * bill.value : 0;
  });
});

// Calculamos el total de todos los billetes
const totalAmount = computed(() =>
  bills.reduce((sum, bill) => sum + bill.amount.value, 0)
);

watch(totalAmount, (newTotal) => {
  emit('update:totalAmount', newTotal);
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
      <tr v-for="(bill, index) in bills" :key="index">
        <td>
          <img :src="bill.image" :alt="`Imagen referencial de billete de ${bill.value}`" />
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
        <td colspan="2" class="text-uppercase">Total de billetes:</td>
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
