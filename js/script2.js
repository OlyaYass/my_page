"use strict"

const like = document.querySelector("._button");
const heart = document.querySelector(".fa-heart");
const counter = document.querySelector(".count");

like.addEventListener('click', event => {
    if(heart.style.color == "red") {
        like.style.backgroundColor = "silver";
        heart.style.color = "white";
        heart.style.marginRight = "0px";
        counter.innerHTML = null;        
    } 
    else {
        like.style.backgroundColor = "pink";
        heart.style.color = "red";
        heart.style.marginRight = "15%";
        counter.classList.add("count");
        counter.innerHTML = "1";
    }
}
);