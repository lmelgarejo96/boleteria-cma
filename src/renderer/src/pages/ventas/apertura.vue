<script setup lang="ts">
import TableBilletes from '@/views/pages/tables/TableBilletes.vue'
import TableMonedas from '@/views/pages/tables/TableMonedas.vue'

const totalAmount = ref(0); // Initialize the variable to store the total amount
const totalQuantity = ref(0);

function handleTotalAmountUpdate(newTotalAmount: number) {
  totalAmount.value = newTotalAmount; // Update the variable when the event is emitted
}

function handleTotalQuantityUpdate(newTotalQuantity: number) {
  totalQuantity.value = newTotalQuantity; // Update the variable when the event is emitted
}
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="APERTURA" class="text-uppercase">
          <div class="d-flex-center pb-5 mb-4">
            <p class="pl-20 m-0">
              Total: <strong> S/. {{ totalAmount +  totalQuantity }}</strong>
            </p>
            <VBtn class="text-uppercase btn-responsive ml-20" block type="submit" to="/">
              Aperturar caja
            </VBtn>
          </div>
        </VCard>
      </VCol>

      <VCol cols="12" md="6">
        <VCard title="Billetes" class="text-uppercase">
          <VCardText>
            <TableBilletes @update:totalAmount="handleTotalAmountUpdate"/>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="6">
        <VCard title="Monedas" class="text-uppercase">
          <VCardText>
            <TableMonedas @update:totalQuantity="handleTotalQuantityUpdate"/>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
.m-0 {
  margin: 0 !important;
}

.ml-10 {
  margin-left: 10px !important;
}

.ml-20 {
  margin-left: 20px !important;
}

.p-20 {
  padding: 20px !important;
}

.pl-20 {
  padding-left: 20px !important;
}

.pl-10 {
  padding-left: 10px !important;
}

.pb-5 {
  padding-bottom: 5px !important;
}

.d-flex-center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
}
.btn-responsive{
  min-width: 17%;
  max-width: 17%;
}
</style>
