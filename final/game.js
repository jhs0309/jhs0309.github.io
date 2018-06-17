
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
        var ref = firebase.database().ref("Ball");
    
        
    ref.on("child_added", function(snap){
        var list = document.getElementById("list");

        const tr = document.createElement("tr");

        const td_Ball = document.createElement("td");
        const td_Color = document.createElement("td");
        const td_Radius=document.createElement("td");
        const td_Status=document.createElement("td");

        td_Ball.innerText = snap.child("Ball").val()
        td_Color.innerText = snap.child("Color").val();
        td_Radius.innerText=snap.child("Radius").val();
        td_Status.innerText=snap.child("Status").val();

        tr.appendChild(td_Ball);
        tr.appendChild(td_Color);
        tr.appendChild(td_Radius);
        tr.appendChild(td_Status);

        tr.id = snap.key;   
        list.appendChild(tr);
        

    });
}

window.onload = function(){
    setupFirebase();

}