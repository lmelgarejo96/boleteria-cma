import { useSession } from '@/composables/useSession'
import { useParametros } from '@/composables/useParametros'
import { NavigationGuardNext, RouteLocation } from 'vue-router'

export const beforeSessionEnter = async (
  to: RouteLocation,
  from: RouteLocation,
  next: NavigationGuardNext
) => {
  const { getSession, loadSession, removeSession } = useSession()
  const { getParametrosGlobales } = useParametros()
  try {
    loadSession()
    await getParametrosGlobales()
    const session = getSession()
    if (to?.meta?.autenticate && !session.usuario) {
      throw new Error('La ruta requiere autenticación')
    } else {
      next()
    }
  } catch (error: any) {
    removeSession()
    next({
      name: 'Login',
      query: { error: error?.message ?? 'Ocurrió un error y no se pudo acceder' }
    })
  }
}
