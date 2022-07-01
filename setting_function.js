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
const database = firebase.database();

var newemail = document.getElementById("email");
var newtime = document.getElementById("time");

function getdata() {
    database.ref('Email/').orderByChild('setmail').on('value', function (snapshot) {
        var content ='';
        snapshot.forEach(function(data){
            var val = data.val();
            document.getElementById("lbmail").innerHTML = "Current Email :  " + val
        })
    });
    database.ref('Time/').orderByChild('settime').on('value', function (snapshot) {
        var content ='';
        snapshot.forEach(function(data){
            var val = data.val();
            document.getElementById("lbtime").innerHTML = "Current Time :  " + val
        })
    });
}

function edittime() {
    database.ref('/Time/').set({
        settime: newtime.value
    });

}

function editemail() {
    database.ref('/Email/').set({
        setmail: newemail.value
    });
}