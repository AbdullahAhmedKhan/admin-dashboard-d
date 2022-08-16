// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVGvO4auxSsCw372P7m7oDOKHpvqHpuwc",
  authDomain: "admin-dashboard-d.firebaseapp.com",
  projectId: "admin-dashboard-d",
  storageBucket: "admin-dashboard-d.appspot.com",
  messagingSenderId: "697260042766",
  appId: "1:697260042766:web:c0ed33d171d83d83282a5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
