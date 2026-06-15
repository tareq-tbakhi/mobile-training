// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeUKlY6wu3awoL1Y_4sUkSUkOJtM7a4LM",
  authDomain: "shelfie-1dd51.firebaseapp.com",
  projectId: "shelfie-1dd51",
  storageBucket: "shelfie-1dd51.firebasestorage.app",
  messagingSenderId: "800222958408",
  appId: "1:800222958408:web:52666ac33ec2aae8fb197d",
  measurementId: "G-LTRQ3V5TLR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})
