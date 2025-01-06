import { parametrosService } from "@/services/parametros.service"
import { useParametrosStore } from "@/store/parametros"

export const useParametros = () => {
  const parametrosStore = useParametrosStore()
  const { parametros } = storeToRefs(parametrosStore)

  const getParametrosGlobales = async () => {
    try {
      const response = await parametrosService.getParametros()
      parametros.value = response
    } catch (error: any) {
      throw new Error("Error al obtener los parámetros globales")
    }
  }

  return {
    parametros,
    getParametrosGlobales
  }
}