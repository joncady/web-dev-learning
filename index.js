"use strict";

window.onload = loaded;

function loaded() {
    console.log("loaded");
    let button = document.getElementById("click");
    button.addEventListener("click", clicked);
    fetch("https://dog.ceo/api/breeds/image/random").then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data.message);
    })
}

function clicked() {
    let el = document.getElementById("area");
    let newEl = document.createElement("div");
    newEl.innerHTML = "<button>click</button>";
    el.appendChild(newEl);
}

// variable types
// int String 
// block level scope
let hi = "hello";
console.log(hi);

let array = ["first", "second", "third"];
let newArray = array.map(function(spot) {
    return spot + " mapped";
});

let filtered = array.filter(filterIt);

function filterIt(spot) {
    return spot.length > 5;
}

let bool = true;

let obj = {
    first: "hello"
};
console.log(obj);
console.log(obj.first);

hello(callback);

function callback() {
    console.log("callback called!");
}

function hello(func) {
    func();
}


 