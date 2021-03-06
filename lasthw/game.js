// Initialize Firebase

function setupFirebase(){
    var config = {
        apiKey: "AIzaSyAyIwNWJ9OGTA0wrNH9FVcktnG1esrvOYQ",
        authDomain: "usw-11051061.firebaseapp.com",
        databaseURL: "https://usw-11051061.firebaseio.com",
        projectId: "usw-11051061",
        storageBucket: "usw-11051061.appspot.com",
        messagingSenderId: "545111732800"
      };
      
      firebase.initializeApp(config);
        var ref = firebase.database().ref("test");
    
        //when child is added
    ref.on("child_added", function(snap){
        var list = document.getElementById("list");

        const tr = document.createElement("tr");

        const td_play = document.createElement("td");
        const td_score = document.createElement("td");
        const td_man=document.createElement("td");

        td_play.innerText = snap.child("team").val() + " --------- " + snap.child("play").val();
        td_score.innerText = snap.child("score").val();
        td_man.innerText=snap.child("name").val();

        tr.appendChild(td_play);
        tr.appendChild(td_score);
        tr.appendChild(td_man);

        tr.id = snap.key;   // snap.key(firebase의 row id)가 table row의 id로 들어감
        list.appendChild(tr);

        if(snap.child("team").val() == "W"){            
            var score_w = document.getElementById("score_w");
            score_w.innerText = parseInt(score_w.innerText) + parseInt(snap.child("score").val());
        }
        else if(snap.child("team").val() == "C"){
            var score_c = document.getElementById("score_c");
            score_c.innerText = parseInt(score_c.innerText) + parseInt(snap.child("score").val());
        }
    });
}

window.onload = function(){
    setupFirebase();
    //alert("ok");
}