// $(window).on('load', function() {
//     $('#BackTop').click(function(){ 
//         $('html,body').animate({scrollTop:0}, 333);
//     });
//     $(window).scroll(function() {
//         if ( $(this).scrollTop() > 300 ){
//             $('#BackTop').fadeIn(200);
//         } else {
//             $('#BackTop').stop().fadeOut(200);
//         }
//     }).scroll();
// });




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}