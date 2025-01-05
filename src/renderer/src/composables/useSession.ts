import { AsignacionUsuario } from '@/models/AsignacionUsuario'
import { UsuarioLogin } from '@/models/UsuarioLogin'
import { useSessionStore } from '@/store/session'
import { storeToRefs } from 'pinia'

const userSessionKey = 'usuario'
const assignSessionKey = 'asignacion'

export const useSession = () => {
  const sessionStore = useSessionStore()
  const { asignacion, usuario } = storeToRefs(sessionStore)

  const setSession = (usuario: UsuarioLogin, asignacion?: AsignacionUsuario) => {
    localStorage.setItem(userSessionKey, JSON.stringify(usuario))
    asignacion && localStorage.setItem(assignSessionKey, JSON.stringify(asignacion))
  }

  const getSession = () => {
    const usuario: UsuarioLogin | null = localStorage.getItem(userSessionKey)
      ? JSON.parse(localStorage.getItem(userSessionKey)!)
      : null
    const asignacion: AsignacionUsuario | null = localStorage.getItem(assignSessionKey)
      ? JSON.parse(localStorage.getItem(assignSessionKey)!)
      : null

    return {
      usuario,
      asignacion
    }
  }

  const removeSession = () => {
    localStorage.removeItem(userSessionKey)
    localStorage.removeItem(assignSessionKey)
  }

  const loadSession = () => {
    const session = getSession()
    usuario.value = session.usuario
    asignacion.value = session.asignacion
  }

  return {
    usuario,
    asignacion,
    setSession,
    getSession,
    removeSession,
    loadSession
  }
}
