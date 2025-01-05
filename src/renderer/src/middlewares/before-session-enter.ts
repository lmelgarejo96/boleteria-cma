import { useSession } from '@/composables/useSession'
import { NavigationGuardNext, RouteLocation } from 'vue-router'

export const beforeSessionEnter = (
  to: RouteLocation,
  from: RouteLocation,
  next: NavigationGuardNext
) => {
  const { getSession, loadSession } = useSession()
  loadSession()
  const session = getSession()
  if (to?.meta?.autenticate && !session.usuario) {
    next({ name: 'Login' })
    return
  } else {
    next()
  }
}
