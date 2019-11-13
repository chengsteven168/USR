const slidesTimer = 2000;
let slideIndex = 1;

window.onload = function(){
    showDivs(slideIndex);
    autoChangeDivs();
}
 
function autoChangeDivs(){
    t=setTimeout(()=>{
        showDivs(slideIndex++);
        autoChangeDivs();
    }, slidesTimer);
}

function plusDivs(n) {
    showDivs(slideIndex += n);
    resetTimeout();
}

function selectDiv(n){
    showDivs(slideIndex=n);
    resetTimeout();
}

function resetTimeout(){
    clearTimeout(t);
    t=setTimeout(()=>{
        showDivs(slideIndex++);
        autoChangeDivs();
    }, slidesTimer);
}

function showDivs(n) {
    console.log(slideIndex);
    const x = document.getElementsByClassName("mySlides");
    if (n >= x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}