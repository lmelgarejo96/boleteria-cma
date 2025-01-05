import { assignService } from '@/services/assign.service'
import { authService } from '@/services/auth.service'
import { getCurrentDate } from '@/utils/date'
import { useRouter } from 'vue-router'
import { useSession } from './useSession'

export const useLogin = () => {
  const router = useRouter()
  const { setSession, removeSession } = useSession()
  const signInData = ref({
    username: '',
    password: '',
    remember: false,
    isPasswordVisible: false
  })
  const signInError = ref({
    message: ''
  })
  const loading = ref(false)

  const login = async () => {
    try {
      loading.value = true
      const usuario = await authService.signIn(signInData.value.username, signInData.value.password)
      loading.value = false

      if (usuario.USUUsuId) {
        loading.value = true
        const assignment = await assignService.getTicketOfficeAssignments({
          fecha: getCurrentDate('YYYY-MM-DD'),
          usuarioId: usuario.USUUsuId
        })
        loading.value = false

        if (!assignment) {
          signInError.value.message = 'No se encontraron asignaciones para el usuario'
          return
        }

        setSession(usuario, assignment)

        router.push({ name: 'Home' })
      }
    } catch (error: any) {
      loading.value = false
      signInError.value.message = error.message
    }
  }

  const logout = () => {
    removeSession()
    router.push('/login')
  }

  return {
    signInData,
    signInError,
    loading,
    login,
    logout
  }
}
