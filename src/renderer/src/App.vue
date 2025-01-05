<script setup lang="ts">
import { useIpcEvents } from './plugins/ipc-events'

useIpcEvents().startEvents()
</script>

<template>
  <VApp>
    <RouterView />
  </VApp>
</template>
