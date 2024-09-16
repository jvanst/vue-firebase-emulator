<script setup lang="ts">
import { auth } from '@/firebase'
import { FirebaseError } from 'firebase/app'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getCurrentUser } from 'vuefire'

const route = useRoute()
const router = useRouter()

// Get the next page from the 'redirect' query parameter
const nextPage =
  route.query.redirect && typeof route.query.redirect === 'string' ? route.query.redirect : '/'

async function handleSignIn(payload: { email: string; password: string }) {
  try {
    await signInWithEmailAndPassword(auth, payload.email, payload.password)

    // Send user to the next page
    router.replace(nextPage)
  } catch (error) {
    if (error instanceof FirebaseError) {
      // Handle Firebase Authentication error
      console.error(error.code, error.message)
    }
    console.error(error)
  }
}

// Redirect to home if user is already logged in
onMounted(async () => {
  const currentUser = await getCurrentUser()

  if (currentUser && !currentUser.isAnonymous) {
    router.push(nextPage)
  }
})
</script>

<template>
  <div>
    <!-- 
      In a real application a <form> would be used to capture input values.
      For the sake of simplicity, we're using a button to simulate the sign-in process.
    -->
    <button @click="handleSignIn({ email: 'test@example.com', password: 'password' })">
      Sign in as test@example.com
    </button>
  </div>
</template>
