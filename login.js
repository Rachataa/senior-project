var firebaseConfig = {
    apiKey: "AIzaSyAQvNPLz3h8zjOPwqjUgtFSnst8UQj8o98",
    authDomain: "peoplecount-7a371.firebaseapp.com",
    databaseURL: "https://peoplecount-7a371.firebaseio.com",
    projectId: "peoplecount-7a371",
    storageBucket: "peoplecount-7a371.appspot.com",
    messagingSenderId: "627787046053",
    appId: "1:627787046053:web:76a31d1a32c82ec344014c",
    measurementId: "G-TQR9TV2D10"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("login_div").style.display = "none";
        
        location.href = "home.html";

        var user = firebase.auth().currentUser;
    } else {
        document.getElementById("login_div").style.display = "block";
    }
});

function login() {

    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    const promise = auth.signInWithEmailAndPassword(userEmail, userPassword);
    
    promise.catch(e => alert(e.message));
    
}
function logout() {
    firebase.auth().signOut().then(function () {
        location.href = "index.html";
        alert("Logout Success")
    }).catch(function (error) {
        
    });
}