// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU4Aa15JAt6h4m-Gak1jSmG5gNgtIlajo",
  authDomain: "minstrumentalorg.firebaseapp.com",
  projectId: "minstrumentalorg",
  storageBucket: "minstrumentalorg.appspot.com",
  messagingSenderId: "220573351863",
  appId: "1:220573351863:web:a191fe35b3535e64447232",
  measurementId: "G-EN1X9NG1Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);