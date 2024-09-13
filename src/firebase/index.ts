import { initializeApp } from 'firebase/app'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { connectAuthEmulator, getAuth } from 'firebase/auth'

const config = import.meta.env.VITE_FIREBASE_APP

export const firebaseApp = initializeApp(JSON.parse(config))

export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)

if (import.meta.env.DEV) {
  connectAuthEmulator(auth, 'http://localhost:9099')
  connectFirestoreEmulator(db, 'localhost', 8080)
}
