


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
       
        const td_team = document.createElement("td");
        const td_play = document.createElement("td");
        const td_score = document.createElement("td");
        const td_man=document.createElement("td");
        


        td_team.innerText = snap.child("team").val();
        td_play.innerText = snap.child("play").val();
        td_score.innerText = snap.child("score").val();
        td_man.innetText   = snap.child("name").val();


        tr.appendChild(td_team);
        tr.appendChild(td_play);
        tr.appendChild(td_score);
        tr.appendChild(td_man);

        tr.id = snap.key;   // snap.key(firebase의 row id)가 table row의 id로 들어감
        list.appendChild(tr);
    });
}
// Initialize Firebase
/////////////////////////////////////////////////////////////////




window.onload = function(){
    setupFirebase();
    //alert("ok");

    var btnSave = document.getElementById("save");
    //btnSave.onclick = function(){} #old style


    btnSave.addEventListener ("click", function(){
        
        var sel = document.getElementById("team");
        var team = sel.options[sel.selectedIndex].value;
        
        var play = document.getElementById("play").value;
        var score = document.getElementById("point").value;
        var name  = document.getElementById("man").value;

        //console.log(sel);
        //console.log(play);
        //console.log(score);

        firebase.database().ref().child("test").push().set({
            team : team,
            play : play,
            score : score,
            name : name
        });
    });



}
