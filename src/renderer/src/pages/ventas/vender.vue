<script setup lang="ts">
const inlineRadio = ref('radio-1')
import DemoFormLayoutHorizontalForm from '@/views/pages/form-layouts/DemoFormLayoutHorizontalForm.vue'
import TableVenderDetail from '@/views/pages/tables/TableVenderDetail.vue'
const cliente = ref('')
const direccion = ref('')
const documento = ref<number>()
const departamento = ['Lima', 'Arequipa', 'Madre de Dios', 'Cusco'] as const
const select1 = ref<typeof departamento[number]>()
const provincia = ['Lima', 'Item 2', 'Item 3', 'Item 4'] as const
const select2 = ref<typeof provincia[number]>()
const distrito = ['San Martin de Porres', 'Item 2', 'Item 3', 'Item 4'] as const
  const select3 = ref<typeof distrito[number]>()
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="VENDER" class="text-uppercase">
          <div class="pl-5 pb-5 d-flex justify-center items-center ga-3">
            <p class="pl-20 m-0">
              Seleccionar módulo disponible:
            </p>
            <VRadioGroup v-model="inlineRadio" inline>
              <VRadio label="Acceso Peatonal" value="radio-1" density="compact" />
              <VRadio label="Eventos" value="radio-2" density="compact" />
            </VRadioGroup>
          </div>

        </VCard>
      </VCol>
      <!-- CARD IZQUIERDO -->
      <VCol cols="12" md="7">
        <VCard title="" class="text-uppercase">
          <VCardText>
            <TableVenderDetail />
          </VCardText>
        </VCard>
      </VCol>
      <!-- CARD DERECHO -->
      <VCol cols="12" md="5">
        <VCard title="" class="text-uppercase">
          <div class="pl-3 pb-5 d-flex justify-center items-center ga-3">
            <p class="pl-20 m-0">
              Tipo de comprobante:
            </p>
            <VRadioGroup v-model="inlineRadio" inline>
              <VRadio label="Boleta" value="radio-3" density="compact" />
              <VRadio label="Factura" value="radio-4" density="compact" />
            </VRadioGroup>
          </div>
          <VCol cols="12">
            <!-- DOCUMENTO -->
            <VRow class="d-flex items-center justify-content-between">
              <VCol cols="12" md="10">
                <VTextField v-model="documento" label="Documento" placeholder="+1 123 456 7890" type="number" />
              </VCol>
              <VCol cols="12" md="2">
                <VBtn color="secondary" variant="outlined" type="reset">
                  <i class="ri-chat-search-line"></i>
                </VBtn>
              </VCol>
            </VRow>
            <!-- RAZON SOCIAL -->
            <VRow class="d-flex items-center">
              <VCol cols="12" md="10">
                <VTextField v-model="cliente" label="Razon social / cliente" placeholder="Clientes varios" type="text" />
              </VCol>
              <VCol cols="12" md="2">
                <VBtn color="secondary" variant="outlined" type="reset">
                  <i class="ri-close-large-line"></i>
                </VBtn>
              </VCol>
            </VRow>
            <!-- DIRECCION -->
            <VRow class="d-flex items-center">
              <VCol cols="12" md="12">
                <VTextField v-model="direccion" label="direccion" placeholder="MADRE DE DIOS S/N" type="text" />
              </VCol>
            </VRow>

            <!-- DEPARTAMENTO -->
            <VRow class="d-flex items-center">
              <VCol cols="12" md="4">
                <VSelect v-model="select1" :items="departamento" placeholder="Seleciona un departtamento"
                  label="DEPARTAMENTO" name="select" require />
              </VCol>
              <VCol cols="12" md="3">
                <VSelect v-model="select2" :items="provincia" placeholder="Seleciona un provincia" label="PROVINCIA"
                  name="select" require />
              </VCol>
              <VCol cols="12" md="3">
                <VSelect v-model="select3" :items="distrito" placeholder="Seleciona un distrito" label="DISTRITO"
                  name="select" require />
              </VCol>
              <VCol cols="12" md="2">
                <VBtn color="secondary" variant="outlined" type="reset">
                  <i class="ri-add-line"></i>
                </VBtn>
              </VCol>
            </VRow>


          </VCol>

        </VCard>
      </VCol>
    </VRow>
  </div>
</template>


<style lang="scss">
.m-0 {
  margin: 0 !important;
}

.items-center {
  align-items: center !important;
}
</style>
