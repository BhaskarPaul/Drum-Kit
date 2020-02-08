const btn=document.querySelectorAll(".drum");for(let i=0;i<btn.length;i++){btn[i].addEventListener("click",function(){createSound(this.innerHTML);createAnimation(this.innerHTML)})}
for(let i=0;i<btn.length;i++){btn[i].addEventListener("keypress",function(event){createSound(event.key);createAnimation(event.key)})}
function createSound(clicked){if(clicked=="w"){new Audio("./sounds/tom-1.mp3").play()}
if(clicked=="a"){new Audio("./sounds/tom-2.mp3").play()}
if(clicked=="s"){new Audio("./sounds/tom-3.mp3").play()}
if(clicked=="d"){new Audio("./sounds/tom-4.mp3").play()}
if(clicked=="j"){new Audio("./sounds/crash.mp3").play()}
if(clicked=="k"){new Audio("./sounds/kick-bass.mp3").play()}
if(clicked=="l"){new Audio("./sounds/snare.mp3").play()}}
function createAnimation(key){let activeButton=document.querySelector("."+key);activeButton.classList.add("pressed")
setTimeout(()=>{activeButton.classList.remove("pressed")},100)}
