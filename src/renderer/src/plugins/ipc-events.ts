import { useSession } from '@/composables/useSession'

export const useIpcEvents = () => {
  const { setNumeroIp } = useSession()

  const startEvents = () => {
    window.electron.ipcRenderer.on('local-ip', (ev, arg) => {
      console.log('local-ip', { ev, arg })
      setNumeroIp(arg)
    })
  }

  return {
    startEvents
  }
}
