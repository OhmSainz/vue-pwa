import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
})

const db = firebaseApp.database()
export const imagesRef = db.ref('images')