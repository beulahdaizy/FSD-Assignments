import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2CyGKg9y2VF-4CMpktGm1lsxPKRkalco",
  authDomain: "movie-app-c6871.firebaseapp.com",
  projectId: "movie-app-c6871",
  storageBucket: "movie-app-c6871.appspot.com",
  messagingSenderId: "170562411213",
  appId: "1:170562411213:web:6fb60080e08a285b772784",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const signUpBtn = document.querySelector("#signup-btn");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userDetails) => {
      const user = userDetails.user;
      console.log(userDetails.user.uid);
      alert("Üser created successfully");
    })
    .catch((error) => {
      console.log(error);
    });
});
