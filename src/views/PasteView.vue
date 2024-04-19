<script setup lang="ts">
import router from '../router'
import LinedTextarea from '../components/LinedTextarea.vue'
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdefghkmnrstuvwxyz', 6)
const copy = () => {
  const id = nanoid()
  router.push(`/${id}`);
}
</script>

<template>
  <main>
    <lined-textarea :disabled="true"></lined-textarea>
    <button @click="copy">COPY</button>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  margin: 0.8em;
}
</style>
