import { apiSgt } from '@/api/sgt'
import { UsuarioLogin } from '@/models/UsuarioLogin'

const signIn = async (username: string, password: string): Promise<UsuarioLogin> => {
  try {
    const endpoint = '/usuarios/login'
    const payload = {
      login: username,
      clave: password
    }
    const response = await apiSgt.post(endpoint, payload)
    return response.data?.data
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message)
  }
}

export const authService = {
  signIn
}
