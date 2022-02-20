$(function(){


    $('.two').hide();
$('.one').click(function(){

    $("body").addClass("dark");
    $('.two').fadeIn();
    $('.one').hide();

})
$('.two').click(function(){

    
    $('.one').fadeIn();
    $('.two').hide();
    $("body").removeClass("dark");


})

let x=$('.menu_shad').offset().top;

$(window).scroll(function(){
let m=$(this).scrollTop();
// alert(m)
console.log(m)
if(m>x){
    $('.menu_shad').addClass("menufix");
}
else{
    $('.menu_shad').removeClass("menufix");
}

})




$(this).scroll(function(){
    let p=$(this).scrollTop();
    if(p>400){
        $('.btop').fadeIn();
    }
    else{
        $('.btop').fadeOut();
    }
})

$(".btop").click(function(){


    $('html,body').animate({
        scrollTop:0,
    },500)

})
/* =====================
 smooth scorlling js start 
 ===========================*/
 $(".navbar a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
 
 
 /* ============ =========
  smooth scorlling js end 
  ===========================*/
});
