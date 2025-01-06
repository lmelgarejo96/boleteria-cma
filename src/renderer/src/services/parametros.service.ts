import { apiSgt } from '@/api/sgt'
import { Parametros } from '@/models/Parametros'

export const getParametros = async (): Promise<Parametros> => {
  try {
    const endpoint = '/parametros'
    const response = await apiSgt.get(endpoint)
    return response.data?.data
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message)
  }
}

export const parametrosService = {
  getParametros
}