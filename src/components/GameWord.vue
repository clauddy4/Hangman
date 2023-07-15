<template>
  <div class="word">
    <span class="letter">л</span>
    <span class="letter"></span>
    <span class="letter">д</span>
    <span class="letter"></span>
    <span class="letter"></span>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

interface Props {
  word: string
}

defineProps<Props>()
</script>
