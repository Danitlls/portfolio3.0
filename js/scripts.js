$(document).ready(function(){
  $(".hamburger").click(function(){
    $("nav").toggle(800);
    $(this).toggleClass("is-active");
  });
  // $(".intro").toggleUp(800);



// Hook doAnimations on scroll, and trigger a scroll
// $(window).on('scroll', function(){
//   $(".block1").removeClass("animatable").addClass("animated");
//   $(window).trigger('scroll');
//
// });
});
