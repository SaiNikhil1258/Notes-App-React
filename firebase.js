import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC_fkwtOf-vovHLJS8zC8wCu90-H91k_QY",
  authDomain: "notes-app-react-90174.firebaseapp.com",
  projectId: "notes-app-react-90174",
  storageBucket: "notes-app-react-90174.appspot.com",
  messagingSenderId: "928162488547",
  appId: "1:928162488547:web:c89e497b939ac3862565d6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
