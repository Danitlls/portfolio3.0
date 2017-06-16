$(document).ready(function(){
  $(".hamburger").click(function(){
    $("nav").toggle(800);
    $(this).toggleClass("is-active");
  });
});
