// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDekILGwjGlYSMb3TzaLr1ZXfuZU-OObdM",
    authDomain: "codelab-2024.firebaseapp.com",
    projectId: "codelab-2024",
    storageBucket: "codelab-2024.appspot.com",
    messagingSenderId: "975417701272",
    appId: "1:975417701272:web:5ac9e9d15b746e67a931ed",
    measurementId: "G-6R5KMCPE3H"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics }