import { ref } from 'vue'

export const usePageTransition = () => {
  const isTransitioning = useState('page-transitioning', () => false)
  const targetLanguage = useState('page-target-language', () => '')
  const { setLocale } = useI18n()

  const triggerTransition = async (callback, langCode = '') => {
    if (isTransitioning.value) return
    
    targetLanguage.value = langCode
    isTransitioning.value = true
    
    // Wait for the slide up animation to cover the screen
    await new Promise(resolve => setTimeout(resolve, 600))
    
    // Execute the actual change (setLocale or navigation)
    if (callback) {
      await callback()
    }
    
    // Stay for a moment
    await new Promise(resolve => setTimeout(resolve, 400))
    
    // Close transition
    isTransitioning.value = false
    targetLanguage.value = ''
  }

  return {
    isTransitioning,
    targetLanguage,
    triggerTransition
  }
}
