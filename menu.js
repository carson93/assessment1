var menu = document.getElementById("menu")

document.getElementById("openbutton").addEventListener("click", function(){
    menu.style.left = "0px";
})

document.getElementById("closebutton").addEventListener("click", function(){
    menu.style.left = "-110px";
})

document.getElementById("makebgbutton").addEventListener("click", function(){
    document.getElementById("bg").style.backgroundImage = document.getElementById("zoom").style.backgroundImage;
})

document.getElementById("resetbutton").addEventListener("click", function(){
    document.getElementById("bg").style.backgroundImage = "none";
})

document.getElementById("showappbutton").addEventListener("click", function(){
    document.getElementById("app1").style.display = "block";
})

document.getElementById("hideappbutton").addEventListener("click", function(){
    document.getElementById("app1").style.display = "none";
})