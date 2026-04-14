import { useState } from '#app'

export const useTypographyState = () => {
  // Using an object instead of a Set for better SSR serialization with useState
  const revealedKeys = useState<Record<string, boolean>>('revealed-typography-keys', () => ({}))

  const hasBeenRevealed = (key: string) => {
    if (!key) return false
    return !!revealedKeys.value[key]
  }

  const markAsRevealed = (key: string) => {
    if (!key) return
    revealedKeys.value[key] = true
  }

  return {
    hasBeenRevealed,
    markAsRevealed
  }
}
