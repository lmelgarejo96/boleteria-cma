<script setup lang="ts">

interface Sale {
  sale: string;
  concepto: string;
  precio: number;
  entradas: number;
  cantidad: number;
  subtotal: number;
  accion: string;
  tamaño: number;
}

const sales: Sale[] = [
  { sale: 'Frozen Yogurt', concepto: 'Visitante nacional', precio: 6, entradas: 24, cantidad: 4, subtotal: 24, accion: 'delete', tamaño: 25 },
  { sale: 'Ice cream sandwich', concepto: 'niño > 4 nacional', precio: 6, entradas: 24, cantidad: 4, subtotal: 24, accion: 'delete', tamaño: 25 },
  { sale: 'Eclair', concepto: 'conadis', precio: 6, entradas: 24, cantidad: 4, subtotal: 24, accion: 'delete', tamaño: 25 },
  { sale: 'Cupcake', concepto: 'niño < 5 nacional', precio: 6, entradas: 24, cantidad: 4, subtotal: 24, accion: 'delete', tamaño: 25 },
  { sale: 'Gingerbread', concepto: 'guia turistico', precio: 6, entradas: 24, cantidad: 4, subtotal: 24, accion: 'delete', tamaño: 25 },
  { sale: 'Gingerbread', concepto: 'Vecino Santa Beatriz', precio: 6, entradas: 24, cantidad: 4, subtotal: 24, accion: 'delete', tamaño: 25 },
  { sale: 'Gingerbread', concepto: 'Locacion Audio Y/O Sonido', precio: 6, entradas: 24, cantidad: 4, subtotal: 24, accion: 'delete', tamaño: 25 },
];

import visitanteImg from '@/assets/images/iconos-vender/visitante.png';
import niñosImg from '@/assets/images/iconos-vender/niños.png';
import discapacitadoImg from '@/assets/images/iconos-vender/discapacitado.png';

const imageMap: Record<string, string> = {
  'Visitante nacional': visitanteImg,
  'Visitante extranjero': visitanteImg,
  'guia turistico': visitanteImg,
  'Vecino Santa Beatriz': visitanteImg,
  'Locacion Audio Y/O Sonido': visitanteImg,
  'niño > 4 nacional': niñosImg,
  'niño < 5 nacional': niñosImg,
};


const getImageByConcepto = (concepto: string) => {
  return imageMap[concepto] || discapacitadoImg;
};


const handleDelete = (item: Sale) => {
  console.log('Deleting item:', item);
};
</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-uppercase">Imagen</th>
        <th class="text-uppercase text-center">Concepto</th>
        <th class="text-uppercase text-center">Precio</th>
        <th class="text-uppercase text-center">N° de entradas</th>
        <th class="text-uppercase text-center">Cantidad</th>
        <th class="text-uppercase text-center">Subtotal</th>
        <th class="text-uppercase text-center">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in sales" :key="item.sale">
        <td class="text-center">
          <img :src="getImageByConcepto(item.concepto)" :alt="item.concepto" :style="{ width: item.tamaño + 'px', height: item.tamaño + 'px' }" />
        </td>
        <td class="text-center">{{ item.concepto }}</td>
        <td class="text-center">{{ item.precio }}</td>
        <td class="text-center">{{ item.entradas }}</td>
        <td class="text-center">{{ item.cantidad }}</td>
        <td class="text-center">{{ item.subtotal }}</td>
        <td class="text-center">
          <VBtn color="secondary" variant="outlined" @click="handleDelete(item)">
            <i class="ri-delete-bin-line"></i>
          </VBtn>
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
