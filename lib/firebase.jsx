import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCeUKlY6wu3awoL1Y_4sUkSUkOJtM7a4LM",
  authDomain: "shelfie-1dd51.firebaseapp.com",
  projectId: "shelfie-1dd51",
  storageBucket: "shelfie-1dd51.firebasestorage.app",
  messagingSenderId: "800222958408",
  appId: "1:800222958408:web:52666ac33ec2aae8fb197d",
  measurementId: "G-LTRQ3V5TLR"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})
