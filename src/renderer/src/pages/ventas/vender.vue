<script setup lang="ts">
const selectedRadio = ref('primary')
const colorsRadio = ['Acceso Peatonal', 'Eventos']
import DemoFormLayoutHorizontalForm from '@/views/pages/form-layouts/DemoFormLayoutHorizontalForm.vue'
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="VENDER" class="text-uppercase">
          <div class="d-flex-center pb-5">
            <p class="pl-20 m-0">
              Seleccionar módulo disponible:
            </p>
            <VRadioGroup v-model="selectedRadio" inline class="pl-10">
              <VRadio v-for="radio in colorsRadio" :key="radio" :label="radio" :color="radio.toLocaleLowerCase()"
                :value="radio.toLocaleLowerCase()" />
            </VRadioGroup>
          </div>

        </VCard>
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
      <VCard title="Billetes" class="text-uppercase">
          <VCardText>
            <DemoFormLayoutHorizontalForm />
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
      <VCard title="Monedas" class="text-uppercase">
          <VCardText>
            <DemoFormLayoutHorizontalForm />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>


