<template>
  <div class="word">
    <span v-for="(letter, index) in word" :key="index + letter" class="letter">
      {{ correctLetters.includes(letter) ? letter : '' }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  word: string
  correctLetters: string[]
}

defineProps<Props>()
</script>
