// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ1fU4aOzjPwvI3Re1-50dwwhQ4TmP4eY",
  authDomain: "wildquest-55cfb.firebaseapp.com",
  projectId: "wildquest-55cfb",
  storageBucket: "wildquest-55cfb.firebasestorage.app",
  messagingSenderId: "1011095437853",
  appId: "1:1011095437853:web:73be26eb5d0f95da847cf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Always pass `app` when initializing Firebase services
export const auth = getAuth(app); 
export const db = getFirestore(app);

 export default app;
 signInWithEmailAndPassword(auth, "test@example.com", "yourPassword")
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("Logged in as:", user.uid);

    // Now try writing to Firestore
    setDoc(doc(db, "users", user.uid), {
      name: "John Doe",
      email: "test@example.com",
    })
      .then(() => console.log("Data written successfully"))
      .catch((error) => console.error("Firestore write error:", error));
  })
  .catch((error) => console.error("Login error:", error));