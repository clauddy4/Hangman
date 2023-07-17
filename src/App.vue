<template>
  <GameHeader />
  <div class="game-container">
    <GameFigure :mistakesCount="wrongLetters.length" />
    <GameWrongLetters v-if="wrongLetters.length" :wrongLetters="wrongLetters" />
    <GameWord :word="word" :correctLetters="correctLetters" />
  </div>

  <GameNotification ref="notification" />
  <GamePopup ref="popup" :word="word" @restart="restart" />
</template>

<script setup lang="ts">
import GameHeader from './components/GameHeader.vue'
import GameFigure from './components/GameFigure.vue'
import GameWrongLetters from './components/GameWrongLetters.vue'
import GameWord from './components/GameWord.vue'
import GamePopup from './components/GamePopup.vue'
import GameNotification from './components/GameNotification.vue'
import { ref, watch } from 'vue'
import { useRandomWord } from '@/composables/useRandomWord'
import { useLetters } from '@/composables/useLetters'
import { useNotifications } from '@/composables/useNotifications'

const { word, getRandomWord } = useRandomWord()
const { letters, correctLetters, wrongLetters, isLose, isWin, addLetter, resetLetters } =
  useLetters(word)
const { notification, showNotification } = useNotifications()
const popup = ref<InstanceType<typeof GamePopup> | null>(null)
const restart = async () => {
  await getRandomWord()
  resetLetters()
  popup.value?.close()
}
window.addEventListener('keydown', ({ key }) => {
  if (isWin.value || isLose.value) return

  if (letters.value.includes(key)) {
    showNotification()
  }

  addLetter(key)
})

watch(wrongLetters, () => {
  if (isLose.value) popup.value?.open('lose')
})

watch(correctLetters, () => {
  if (isWin.value) popup.value?.open('win')
})
</script>
