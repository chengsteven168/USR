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
    slideIndex += n;
    if(slideIndex>document.getElementsByClassName("mySlides").length){
        slideIndex =1;
    }else if(slideIndex<=0){
        slideIndex = document.getElementsByClassName("mySlides").length
    }
    showDivs();
    resetTimeout();
}

function selectDiv(n){
    slideIndex=n;
    showDivs();
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
    const x = document.getElementsByClassName("mySlides");
    const selectSlideBtn = document.getElementsByClassName("selectSlideBtn");
    if (n >= x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        selectSlideBtn[i].classList.remove('active');
    }
    x[slideIndex-1].style.display = "block";
    selectSlideBtn[slideIndex-1].classList.add('active');
}