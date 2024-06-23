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
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

let max = 6;
let current = 1;

firstNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-19.5%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1; 
});

nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-48%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-96%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

nextBtnFourth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-192%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

nextBtnFifth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-484%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

submitBtn.addEventListener("click", function(){
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;

    setTimeout(function () {
        alert("You Are Successfully Signed Up!");
        location.reload();
    }, 800)
});    


prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "0%";
     bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-19%";
     bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnFourth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-48%";
     bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnFifth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-97%";
     bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnSixth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-195%";
     bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

