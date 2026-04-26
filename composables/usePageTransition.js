import { ref } from 'vue'

export const usePageTransition = () => {
  const isTransitioning = useState('page-transitioning', () => false)
  const { setLocale } = useI18n()

  const triggerTransition = async (callback) => {
    if (isTransitioning.value) return
    
    isTransitioning.value = true
    
    // Wait for the slide up animation to cover the screen
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Execute the actual change (setLocale or navigation)
    if (callback) {
      await callback()
    }
    
    // Stay for a moment
    await new Promise(resolve => setTimeout(resolve, 600))
    
    // Close transition
    isTransitioning.value = false
  }

  return {
    isTransitioning,
    triggerTransition
  }
}
