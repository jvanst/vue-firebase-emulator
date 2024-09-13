<script setup lang="ts">
import { collection, query, onSnapshot } from 'firebase/firestore'
import { onUnmounted, ref } from 'vue'

import { db } from '@/firebase'

type Note = {
  id: string
  title: string
  content: string
}

const notes = ref<Note[]>([])

const q = query(collection(db, 'notes'))

const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const documents: Note[] = []

  querySnapshot.forEach((doc) => {
    documents.push({
      ...(doc.data() as Note),
      id: doc.id
    })
  })

  notes.value = documents
})

onUnmounted(() => unsubscribe)
</script>

<template>
  <main>
    <p>
      Go to
      <a href="http://localhost:4000/firestore/default/data" target="_blank">
        http://localhost:4000/firestore/default/data
      </a>
      and add your own notes, they will appear here magically!
    </p>
    <h1>Notes</h1>
    <ul>
      <li v-for="note in notes" :key="note.id">
        <h2>{{ note.title }}</h2>
        <p>{{ note.content }}</p>
      </li>
    </ul>
  </main>
</template>
