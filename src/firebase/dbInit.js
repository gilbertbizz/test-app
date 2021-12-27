// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5jl6FVxd55n7yUK04RRhpuazDt7Q9-6o",
  authDomain: "fg-employee-mgt.firebaseapp.com",
  projectId: "fg-employee-mgt",
  storageBucket: "fg-employee-mgt.appspot.com",
  messagingSenderId: "632664980029",
  appId: "1:632664980029:web:6fb55ded2db86700a10854",
  measurementId: "G-27D3G9QEFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
