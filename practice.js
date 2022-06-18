const firebaseConfig = {
    apiKey: "AIzaSyANn7ap9AXsFD7kj3G7Hwx-KamA8BQ2CFY",
    authDomain: "practice-f6025.firebaseapp.com",
    databaseURL: "https://practice-f6025-default-rtdb.firebaseio.com",
    projectId: "practice-f6025",
    storageBucket: "practice-f6025.appspot.com",
    messagingSenderId: "133670650994",
    appId: "1:133670650994:web:6e4b32d0380ad07cd4eeeb",
    measurementId: "G-313EF0RVRZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}