// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBtssxR_GCQ8UY3Ozv_x1qjNuzU8zRj364",
authDomain: "pmg001-01.firebaseapp.com",
projectId: "pmg001-01",
storageBucket: "pmg001-01.appspot.com",
messagingSenderId: "595569726327",
appId: "1:595569726327:web:089baba732d97af8584772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveTask = (name, phone, email, school, experience, location) => 
    addDoc(collection(db, 'tasks'), {name, phone, email, school, experience, location});
