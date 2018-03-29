var images = new Array('son1.svg','son2.svg','son3.svg')
var start = 0;

document.getElementById("left").onclick=function(){
    start--;
    if(start<0) start=images.length-1;
    document.getElementById("myImage").src=images[start];
}

document.getElementById("right").onclick=function(){
    start++;
    if(start>images.length-1) start=0;
    document.getElementById("myImage").src=images[start];
}