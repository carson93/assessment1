var zoomh = 70;
var zoomw = 100;

var ch1 = 1;
var ch2 = 2;
var ch3 = 3;

document.getElementById("bg1button").addEventListener("click",function(){
    ch1 = 1;
    ch2 = 2;
    ch3 = 3;
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i"+ch1+".jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i"+ch2+".jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i"+ch3+".jpg)";
})

document.getElementById("bg2button").addEventListener("click",function(){
    ch1 = 4;
    ch2 = 5;
    ch3 = 6;
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i"+ch1+".jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i"+ch2+".jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i"+ch3+".jpg)";
})

document.getElementById("bg3button").addEventListener("click",function(){
    ch1 = 7;
    ch2 = 8;
    ch3 = 9;
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i"+ch1+".jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i"+ch2+".jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i"+ch3+".jpg)";
})

document.getElementById("bg4button").addEventListener("click",function(){
    ch1 = 10;
    ch2 = 11;
    ch3 = 12;
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i"+ch1+".jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i"+ch2+".jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i"+ch3+".jpg)";
})

document.getElementById("previousbutton").addEventListener("click",function(){
    ch1 -= 3;
    ch2 -= 3;
    ch3 -= 3;
    if (ch1 == -2) {
        ch1 = 10;
    }
    if (ch2 == -1) {
        ch2 = 11;
    }
    if (ch3 == 0) {
        ch3 = 12;
    }
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i"+ch1+".jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i"+ch2+".jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i"+ch3+".jpg)";
})

document.getElementById("nextbutton").addEventListener("click",function(){
    ch1 += 3;
    ch2 += 3;
    ch3 += 3;
    if (ch1 == 13) {
        ch1 = 1;
    }
    if (ch2 == 14) {
        ch2 = 2;
    }
    if (ch3 == 15) {
        ch3 = 3;
    }
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i"+ch1+".jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i"+ch2+".jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i"+ch3+".jpg)";
})

document.getElementById("ch1").addEventListener("mouseenter", function(){
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch1").style.backgroundImage;
})

document.getElementById("ch2").addEventListener("mouseenter", function(){
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch2").style.backgroundImage;
})

document.getElementById("ch3").addEventListener("mouseenter", function(){
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch3").style.backgroundImage;
})

document.getElementById("zoom").addEventListener("click", function(){
    document.getElementById("zoomcontrols").style.display = "inline";
})

document.getElementById("plusbutton").addEventListener("click", function(){
    zoomh += 7;
    zoomw += 10;
    document.getElementById("zoom").style.height = zoomh+"%";
    document.getElementById("zoom").style.width = zoomw+"%";
})

document.getElementById("minusbutton").addEventListener("click", function(){
    zoomh -= 7;
    zoomw -= 10;
    document.getElementById("zoom").style.height = zoomh+"%";
    document.getElementById("zoom").style.width = zoomw+"%";
})