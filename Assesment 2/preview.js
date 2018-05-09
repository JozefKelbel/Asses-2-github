/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/




var scroll = 1

hair.addEventListener("click", function(){
    scroll = scroll+1;
    if(scroll >= 4){
        scroll = 1;
    }
hair.src = "img/hair"+scroll+".png";
});

eyes.addEventListener("click", function(){
    scroll = scroll+1;
    if(scroll >= 4){
        scroll = 1;
    }
eyes.src = "img/eyes"+scroll+".png";
});

nose.addEventListener("click", function(){
    scroll = scroll+1;
    if(scroll >= 4){
        scroll = 1;
    }
    
nose.src = "img/nose"+scroll+".png";
});

mouth.addEventListener("click", function(){
    scroll = scroll+1;
    if(scroll >= 4){
        scroll = 1;
    }
mouth.src = "img/mouth"+scroll+".png";
});