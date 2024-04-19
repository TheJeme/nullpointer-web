<script setup lang="ts">
import { ref, onMounted } from 'vue'
import copy from 'copy-to-clipboard';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "@/firebase";
import { useRoute } from 'vue-router'
import LinedTextarea from '../components/LinedTextarea.vue'

const route = useRoute();
const content = ref('');

function copyPaste() {
  copy(content.value)
}

onMounted(async () => {
  await fetchContent();
});

async function fetchContent() {
  const id = route.params.id;
  if (id) {
    const pasteData = await getPaste(id);
    if (pasteData) {
      content.value = pasteData.content;
    } else {
      content.value = "Not found";
    }
  }
} 

async function getPaste(id) {
    const pasteDocRef = doc(db, "pastes", id);
    const docSnap = await getDoc(pasteDocRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
}
</script>

<template>
  <main>
    <lined-textarea :disabled="true" :value="content"></lined-textarea>
    <button @click="copyPaste">COPY</button>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  margin: 0.8em;
}
</style>
