import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBlM1C9f385DFX24Bo_7CSSgi72mUEiUHw",
  authDomain: "jemedev-nullpointer.firebaseapp.com",
  projectId: "jemedev-nullpointer",
  storageBucket: "jemedev-nullpointer.appspot.com",
  messagingSenderId: "289819861826",
  appId: "1:289819861826:web:9c8a8777337d6275531edb"
});


export const db = getFirestore(firebaseApp);

export const pastesRef = collection(db, "pastes");