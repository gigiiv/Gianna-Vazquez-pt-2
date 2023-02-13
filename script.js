/* Declare variables below to save the different sections (divs) of your story*/

let left= document.querySelector(".option-one");
let right= document.querySelector(".option-two");

let thundering= document.querySelector(".option-one-screen");
let greatRainbow= document.querySelector(".option-two-screen");

let storm= document.querySelector(".storm");
let float= document.querySelector(".float");

let joinStorm= document.querySelector(".option-one-close-ending-one");
let joinRainbow= document.querySelector(".option-two-close-ending-two");

let rainbow= document.querySelector(".rainbow");
let away= document.querySelector(".away");

let happy= document.querySelector(".option-one-ending-one");
let sad= document.querySelector(".option-two-ending-two");

let body = document.querySelector("body");

left.onclick=function(){
    thundering.style.display="block";
};
right.onclick=function(){
    greatRainbow.style.display="block";
};
storm.onclick=function(){
    joinStorm.style.display="block";
};
float.onclick=function(){
    happy.style.display="block";
};
rainbow.onclick=function(){
    joinRainbow.style.display="block";
};
away.onclick=function(){
    sad.style.display="block";
};