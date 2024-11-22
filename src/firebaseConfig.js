import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMKOMSRwMXCty6Wj5yNOHC-eNw0I5uNgc",
    authDomain: "backend-reactjs-8855a.firebaseapp.com",
    projectId: "backend-reactjs-8855a",
    storageBucket: "backend-reactjs-8855a.firebasestorage.app",
    messagingSenderId: "254351840541",
    appId: "1:254351840541:web:bb0bb5a32abac519367df4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )