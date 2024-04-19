<script setup lang="ts">
import { ref } from 'vue'
import router from '../router'
import { doc, setDoc } from "firebase/firestore";
import { pastesRef } from "@/firebase";
import LinedTextarea from '../components/LinedTextarea.vue'
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdefghkmnrstuvwxyz', 6)
const content = ref('')

function onInput(value) {
  if (typeof value !== 'string') return;
  content.value = value;
}

async function createPaste() {
  if (!content.value.trim()) return;
  const id = nanoid();
  const pasteDocRef = doc(pastesRef, id);
  await setDoc(pasteDocRef, {
    content: content.value,
  });
  router.push(`/${id}`);
}
</script>

<template>
  <main>
    <lined-textarea @input="onInput"></lined-textarea>
    <button @click="createPaste">CREATE</button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  margin: 0.8em;
}
</style>