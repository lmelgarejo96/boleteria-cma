import { apiSgt } from '@/api/sgt'
import { AsignacionUsuario } from '@/models/AsignacionUsuario'

interface IGetTicketOfficeAssignmentsParams {
  fecha: string
  usuarioId?: number
  puntoVentaId?: number
  boleteriaId?: number
}

export const getTicketOfficeAssignments = async (
  params: IGetTicketOfficeAssignmentsParams
): Promise<AsignacionUsuario> => {
  try {
    const endpoint = '/asignacionesboleteria'
    const response = await apiSgt.get(endpoint, {
      params
    })
    return response.data?.data?.[0]
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message)
  }
}

export const assignService = {
  getTicketOfficeAssignments
}
