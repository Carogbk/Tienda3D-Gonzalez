import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBNGh63_q-J7TbNTxdJSUK7mHZ1BXdnkJM",
    authDomain: "gprintergonzalez.firebaseapp.com",
    projectId: "gprintergonzalez",
    storageBucket: "gprintergonzalez.appspot.com",
    messagingSenderId: "111269899992",
    appId: "1:111269899992:web:aaec2f09a9cc51d08c71ad"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)