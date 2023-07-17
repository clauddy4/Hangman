import { ref } from 'vue'
import GameNotification from '@/components/GameNotification.vue'

export const useNotifications = () => {
  const notification = ref<InstanceType<typeof GameNotification> | null>(null)

  const showNotification = () => {
    notification.value?.open()
    setTimeout(() => notification.value?.close(), 1500)
  }

  return {
    notification,
    showNotification
  }
}
