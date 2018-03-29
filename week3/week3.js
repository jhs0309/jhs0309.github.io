var images = new Array('C:\Users\user\Desktop\고니/son.jpng','C:\Users\user\Desktop\고니/son.jpgson2.jpg');
var sijak = 0;

document.getElementById("left").onclick = function() {
    // alert("left");
    sijak--;
    if (sijak < 0)
        sijak = images.length - 1;
    document.getElementById("myImage").src = images[sijak];
}

document.getElementById("right").onclick = function() {
    //alert("right");
    sijak++;
    if (sijak > images.length - 1)
        sijak = 0;
    document.getElementById("myImage").src = images[sijak];
}