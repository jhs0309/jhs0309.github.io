
var pb = new Array();


var array2 = [];

    document.getElementById("btnSave").onclick = function () {
        //alert("ok");
        var lastName = document.getElementById("ln").value;
        var firstName = document.getElementById("fn").value;
        var phoneNumber = document.getElementById("phone").value;

        var data = { ln: lastName, fn: firstName, phone: phoneNumber };
        array2.push(data);
        var table = document.getElementById("mytable");

        for (var i = table.rows.length - 1; i > 0; i--) {
            table.deleteRow(i);
        }
        for (var i = 0; i < array2.length; i++) {
            table = document.getElementById("mytable");
            tr = document.createElement("tr");
            td1 = document.createElement("td");
            td2 = document.createElement("td");
            td3 = document.createElement("td");
            
            td1.innerText = array2[i].ln;
            td2.innerText = array2[i].fn;
            td3.innerText = array2[i].phone
           
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.id = "item" + i;
            
            table.appendChild(tr);
        }

    }

    document.getElementById("btnSearch").onclick = function () {
        //alert("ok");
        var search = document.getElementById("search").value;
        for (var i = 0; i < array2.length; i++) {
            if (array2[i].ln == search) 
            {
                
                for (var j = 0; j < array2.length; j++) {
                    document.getElementById("item" + j).style.background = "white"; 
                    
                    }
                
                    document.getElementById("item" + i).style.background = "yellow";
            }
           
        }

    }

    document.getElementById("btnSort").onclick = function () {
        

            sortOn(array2, "ln");

            var table = document.getElementById("mytable");

            for (var i = table.rows.length - 1; i > 0; i--) {
                table.deleteRow(i);
            }

            for (var i = 0; i < array2.length; i++) {
                table = document.getElementById("mytable");
                tr = document.createElement("tr");
                td1 = document.createElement("td");
                td2 = document.createElement("td");
                td3 = document.createElement("td");
                td1.innerText = array2[i].ln;
                td2.innerText = array2[i].fn;
                td3.innerText = array2[i].phone;

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.id = "item" + i;

                table.appendChild(tr);
                table.appendChild(tr);
            }

       
       
    }
 function sortOn(arr, prop) {
            arr.sort(
                function (a, b) {
                    if (a[prop] < b[prop]) {
                        return -1;
                    } else if (a[prop] > b[prop]) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            );
        }
    function updateTable(p) {
        //Update Table Here..
        table = document.getElementById("mytable");
        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        td1.innerText = p.lastName;
        td2.innerText = p.firstName;
        td3.innerText = p.phoneNumber;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
    }

