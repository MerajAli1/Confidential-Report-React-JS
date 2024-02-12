import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB77wcPCzFmC4Jo-wL0dFRm-5oDbv-pK5U",
    authDomain: "annual-report-8664e.firebaseapp.com",
    projectId: "annual-report-8664e",
    storageBucket: "annual-report-8664e.appspot.com",
    messagingSenderId: "360768713857",
    appId: "1:360768713857:web:05093e265e294a1f018980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth }