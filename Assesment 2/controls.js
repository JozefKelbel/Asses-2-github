var display = document.getElementById("display");
var hairInput = document.getElementById("inpH");
var eyesInput = document.getElementById("inpE");
var noseInput = document.getElementById("inpN");
var mouthInput = document.getElementById("inpM");


document.getElementById("color").addEventListener("change", function(){
 document.getElementById("preview").style.backgroundColor = color.value;
});

document.getElementById("number").addEventListener("click", function(){
    
    document.getElementById("inpH").type = number;
    document.getElementById("inpE").type = number;
    document.getElementById("inpN").type = number;
    document.getElementById("inpM").type = number;
});

document.getElementById("range").addEventListener("click", function(){
    
    document.getElementById("inpH").type = range;
    document.getElementById("inpE").type = range;
    document.getElementById("inpN").type = range;
    document.getElementById("inpM").type = range;
});

function changeType(type){
    hairInput.type = type;
    eyesInput.type = type;
    noseInput.type = type;
    mouthInput.type = type;
}

hairInput.addEventListener("change", function(){
   hair.style.width = hairInput.value+"%"; 
});
eyesInput.addEventListener("change", function(){
   eyes.style.width = eyesInput.value+"%"; 
});
noseInput.addEventListener("change", function(){
   nose.style.width = noseInput.value+"%"; 
});
mouthInput.addEventListener("change", function(){
   mouth.style.width = mouthInput.value+"%"; 
});


function createFace(){
    var copy = document.createElement("div");
    copy.style.width = "100px";
    copy.style.height = "100px";
    copy.style.backgroundColor = document.getElementById("preview").style.backgroundColor;
    copy.style.position = "relative";
    
    display.appendChild(copy);
    var copyHair = document.createElement("img");
    copy.appendChild(copyHair);
    copyHair.src = hair.src;
    copyHair.style.margin = "auto";
    copyHair.style.width = hair.style.width;
    copyHair.style.top = hair.style.top;
    copyHair.className = "items";
    
    var copyEyes = document.createElement("img");
    copy.appendChild(copyEyes);
    copyEyes.src = eyes.src;
    copyEyes.style.margin = "auto";
    copyEyes.style.width = eyes.style.width;
    copyEyes.style.top = eyes.style.top;
    copyEyes.className = "items";
    
    var copyNose = document.createElement("img");
    copy.appendChild(copyNose);
    copyNose.src = nose.src;
    copyNose.style.margin = "auto";
    copyNose.style.width = nose.style.width;
    copyNose.style.top = nose.style.top;
    copyNose.className = "items";
    
    var copyMouth = document.createElement("img");
    copy.appendChild(copyMouth);
    copyMouth.src = mouth.src;
    copyMouth.style.margin = "auto";
    copyMouth.style.width = mouth.style.width;
    copyMouth.style.top = mouth.style.top;
    copyMouth.className = "items";
    
    copy.addEventListener("click", function(){
        copy.style.display = "none";
    });
};

document.getElementById("add").addEventListener("click", function(){
createFace();
});


function rndmFace(){
    var randomHair = Math.round(Math.random()*2)+1;
    var randomEyes = Math.round(Math.random()*2)+1;
    var randomNose = Math.round(Math.random()*2)+1;
    var randomMouth = 
    Math.round(Math.random()*2)+1;
    
    var red = Math.round(Math.random()*255)
    var blue = Math.round(Math.random()*255)
    var green = Math.round(Math.random()*255)
    var roundHair = Math.round(Math.random()*70);
    var roundEyes = Math.round(Math.random()*40);
    var roundNose = Math.round(Math.random()*30);
    var roundMouth = Math.round(Math.random()*35);
    
    hair.src = "img/hair"+randomHair+".png";
    eyes.src = "img/eyes"+randomEyes+".png";
    nose.src = "img/nose"+randomNose+".png";
    mouth.src = "img/mouth"+randomMouth+".png";
    
    preview.style.backgroundColor = "rgb("+red+","+blue+","+green+")";
    
    hair.style.width = roundHair+"%";
    eyes.style.width = roundEyes+"%";
    nose.style.width = roundNose+"%";
    mouth.style.width = roundMouth+"%";
    
    hairInput.value = roundHair;
    eyesInput.value = roundEyes;
    noseInput.value = roundNose;
    mouthInput.value = roundMouth;
};


document.getElementById("random").addEventListener("click", function(){
    rndmFace();
});

var setTime = null;
var randomTime = null;
document.getElementById("add").addEventListener("click", function () {
    setTime = setInterval(createFace, 500);
    randomTime = setInterval(rndmFace, 500);
});

document.getElementById("stop").addEventListener("click", function(){
    clearInterval(setTime);
    clearInterval(randomTime);
});
