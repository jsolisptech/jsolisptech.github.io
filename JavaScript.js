var main = function(){
$('.dropdown-menu').hide();
$('.dropdown-toggle').click(function(){

$('.dropdown-menu').toggle();



}
  $('.cell').hover(function(){
    $('.dropdown-menu').toggle();


    $('.dropdown-menu').hide();


});
}
$(document).ready(main);
