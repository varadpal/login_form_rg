const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFifth = document.querySelector(".prev-4");
const nextBtnFifth = document.querySelector(".next-4");
const prevBtnSixth = document.querySelector(".prev-5");
const submitBtn = document.querySelector(".submit");

firstNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-19%";
});

nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-48%";
});

nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-97%";
});

nextBtnFourth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-195%";
});

nextBtnFifth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-487%";
});    


prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "0%";
});

prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-19%";
});

prevBtnFourth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-48%";
});

prevBtnFifth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-97%";
});

prevBtnSixth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-195%";
});

