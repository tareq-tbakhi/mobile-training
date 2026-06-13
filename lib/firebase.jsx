import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
 
// paste YOUR OWN config here (example values below)
const firebaseConfig = {
  apiKey: "AIza...4a4LM",
  authDomain: "shelfie-1dd51.firebaseapp.com",
  projectId: "shelfie-1dd51",
  storageBucket: "shelfie-1dd51.firebasestorage.app",
  messagingSenderId: "800222958408",
  appId: "1:800222958408:web:5266...197d",
}
 
export const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})
