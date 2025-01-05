import { AsignacionUsuario } from '@/models/AsignacionUsuario'
import { UsuarioLogin } from '@/models/UsuarioLogin'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore({
  id: 'session-store',
  state: () => ({
    usuario: null as UsuarioLogin | null,
    asignacion: null as AsignacionUsuario | null // Si es vendedor
  }),
})
