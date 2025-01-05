import { AsignacionUsuario } from '@/models/AsignacionUsuario'
import { UsuarioLogin } from '@/models/UsuarioLogin'
import { useSessionStore } from '@/store/session'
import { storeToRefs } from 'pinia'

const userSessionKey = 'usuario'
const assignSessionKey = 'asignacion'

export const useSession = () => {
  const sessionStore = useSessionStore()
  const { asignacion, usuario, numeroIp } = storeToRefs(sessionStore)

  const setNumeroIp = (ip: string) => {
    numeroIp.value = ip
  }

  const setSession = (datosUsuario: UsuarioLogin, datosAsignacion?: AsignacionUsuario) => {
    localStorage.setItem(userSessionKey, JSON.stringify(datosUsuario))
    usuario.value = datosUsuario
    asignacion && localStorage.setItem(assignSessionKey, JSON.stringify(datosAsignacion))
    datosAsignacion && (asignacion.value = datosAsignacion)
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

  const getNumeroIp = () => {
    return numeroIp.value
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
    numeroIp,
    setSession,
    getSession,
    removeSession,
    loadSession,
    setNumeroIp,
    getNumeroIp
  }
}
