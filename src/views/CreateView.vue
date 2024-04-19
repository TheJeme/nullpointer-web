<script setup lang="ts">
import router from '../router'
import LinedTextarea from '../components/LinedTextarea.vue'
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdefghkmnrstuvwxyz', 6)
const create = () => {
  const id = nanoid()
  router.push(`/${id}`);
}
</script>

<template>
  <main>
    <lined-textarea></lined-textarea>
    <button @click="create">CREATE</button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  margin: 0.8em;
}
</style>