import { Parametros } from '@/models/Parametros'
import { defineStore } from 'pinia'

export const useParametrosStore = defineStore({
  id: 'parametros-store',
  state: () => ({
    parametros: null as Parametros | null,
  }),
})
