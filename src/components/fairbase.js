import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyBueCbhgBpc20vdgkIypZHz-157mhSP-gc',
  authDomain: "noname-project-2410d.firebaseapp.com",
  projectId: "noname-project-2410d",
  storageBucket: "noname-project-2410d.appspot.com",
  messagingSenderId: "590548175951",
  appId: "1:590548175951:web:3435a494b496cc2f3e2e3a"
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider()