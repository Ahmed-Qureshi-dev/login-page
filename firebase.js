

  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
  import { 
    getAuth ,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword

  } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCmTPTs59bdQoig-PNqHPF_6Ee_UgiNUwA",
    authDomain: "practice-d59b6.firebaseapp.com",
    projectId: "practice-d59b6",
    storageBucket: "practice-d59b6.firebasestorage.app",
    messagingSenderId: "572653881738",
    appId: "1:572653881738:web:8784ac48783c3386a5a073"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 console.log("initialize", app);
  const auth = getAuth(app)
    console.log("auth", auth);
var text =document.getElementById("text")
    
 // signup 
var signupbtn = document.getElementById("signupbtn")
signupbtn.addEventListener("click" ,signup)



onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});


function signup(){
  var semail = document.getElementById("semail").value
  var spassword = document.getElementById("spassword").value
  
  createUserWithEmailAndPassword(auth, semail, spassword)
  .then((userCredential) => {
  const user = userCredential.user;
text.innerText= user.email                                
  })
  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
 
  });
}
   




   
 // login
var loginbtn = document.getElementById("loginbtn")
loginbtn.addEventListener("click" ,login)


function login(){
  var lemail = document.getElementById("lemail").value
  var lpassword = document.getElementById("lpassword").value
  
  signInWithEmailAndPassword(auth, lemail, lpassword)
  .then((userCredential) => {
  const user = userCredential.user;
text.innerText= user.email                                
  })
  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
 
  });
}
   









