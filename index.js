let likeAmount = document.querySelector("#like1");
let botonAumento = document.querySelector(".botonLike");

botonAumento.addEventListener("click", function(){
    let like = parseInt(likeAmount.textContent) +1;
    likeAmount.textContent = like

});

let likeAmount1 = document.querySelector("#like2");
let botonAumento1 = document.querySelector(".botonLike1");

botonAumento1.addEventListener("click", function(){
    let like1 = parseInt(likeAmount1.textContent) +1;
    likeAmount1.textContent = like1

});

let likeAmount2 = document.querySelector("#like3");
let botonAumento2 = document.querySelector(".botonLike2");

botonAumento2.addEventListener("click", function(){
    let like2 = parseInt(likeAmount2.textContent) +1;
    likeAmount2.textContent = like2

});

