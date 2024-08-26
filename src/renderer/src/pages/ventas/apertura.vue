<script setup lang="ts">
import DemoFormLayoutHorizontalForm from '@/views/pages/form-layouts/DemoFormLayoutHorizontalForm.vue'
</script>

<template>
  <div>
    <VRow>
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
