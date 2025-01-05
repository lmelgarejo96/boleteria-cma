<script setup lang="ts">
import homeBg from '@/assets/images/home.png'
</script>
<template>
  <div class="background-container">
    <div class="image-overlay">
      <h4 class="portal-title">Sistema Global de Tesorería</h4>
      <img :src="homeBg" alt="Home" class="background-image" draggable="false" />
      <div class="application__content">
        <div class="application__title"><h4>Bienvenido Luis</h4></div>
        <div class="application__description">
          <p>
            Este sistema centraliza todo el flujo de venta de boletos del Circuito Mágico del Agua. 
            Aquí encontraras módulos de gestión de caja, ventas, boleterías, artículos, tarifas y mucho más.
            <!-- Este sistema te permite realizar ventas, configurar puntos de venta, boleterías, artículos, tarifas y mucho más. -->
          </p>
        </div>
<!--         <div class="additional-info"><p>¡Decide con confianza y todo en un solo lugar!</p></div> -->
      </div>
    </div>
  </div>
</template>
<style scoped>
.background-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 84vh;
  overflow: hidden;
}
.image-overlay {
  position: relative;
  width: 80%;
}
.portal-title {
  font-size: 32px;
  font-family: var(--primary-font-semi-bold);
  margin-bottom: 15px;
  text-align: center;
  color: #4f6176;
}
.background-image {
  max-width: 35%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
}
.application__content {
  padding-top: 8px;
  position: absolute;
  top: 82%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #4f6176;
  width: 33%;
  max-width: 400px;
}
.application__title {
  font-size: 25px;
  font-family: var(--primary-font-semi-bold);
  margin-bottom: 15px;
  text-align: center;
  color: #000 !important;
}
.additional-info,
.application__description {
  font-size: 14px;
  text-align: center;
  margin-bottom: 18px;
}
</style>
