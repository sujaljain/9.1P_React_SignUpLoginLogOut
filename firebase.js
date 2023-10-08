import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCNVFOaryi-lXScj5qC5cxdI4npPu4wFzk",
  authDomain: "newloginsign.firebaseapp.com",
  projectId: "newloginsign",
  storageBucket: "newloginsign.appspot.com",
  messagingSenderId: "63995913953",
  appId: "1:63995913953:web:0d714011909c320d1c39a0",
  measurementId: "G-FG3HFMH0BG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;