import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
const firebaseConfig = {
  apiKey: "AIzaSyAt9UErf7eErK_haYTtnFPKaduZthrD-Yc",
  authDomain: "zdfronpol10fb.firebaseapp.com",
  databaseURL:
    "https://zdfronpol10fb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zdfronpol10fb",
  storageBucket: "zdfronpol10fb.appspot.com",
  messagingSenderId: "201467026540",
  appId: "1:201467026540:web:640d823271a3063f3f0c49",
  measurementId: "G-LTP4QR1R84",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);

export const storage = getStorage(app);

export const firestore = getFirestore(app);
