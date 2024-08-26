<script setup lang="ts">
import DemoFormLayoutMultipleColumn from '@/views/pages/form-layouts/DemoFormLayoutMultipleColumn.vue'
</script>

<template>
  <div>
    <VCol cols="12">
      <!-- 👉 Multiple Column -->
      <VCard title="Vender" class="text-uppercase">
        <VCardText>
          <DemoFormLayoutMultipleColumn />
        </VCardText>
      </VCard>
    </VCol>

  </div>
</template>
