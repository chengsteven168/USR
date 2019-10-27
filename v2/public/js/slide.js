let slideIndex = 1;
$(window).on('load', function() { 
    showDivs(slideIndex);
});  

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    const x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}