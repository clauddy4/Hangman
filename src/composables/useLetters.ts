import { computed, ref } from 'vue'

export const useLetters = (word: Ref<string>) => {
  const letters = ref<string[]>([])
  const correctLetters = computed(() => letters.value.filter((l) => word.value.includes(l)))
  const wrongLetters = computed(() => letters.value.filter((l) => !word.value.includes(l)))
  const isLose = computed(() => wrongLetters.value.length === 6)
  const isWin = computed(() => [...word.value].every((l) => correctLetters.value.includes(l)))
  const addLetter = (key: string) => {
    if (/[а-яА-ЯёЁ]/.test(key)) {
      letters.value.push(key.toLowerCase())
    }
  }
  const resetLetters = () => {
    letters.value = []
  }

  return {
    letters,
    correctLetters,
    wrongLetters,
    isLose,
    isWin,
    addLetter,
    resetLetters
  }
}
