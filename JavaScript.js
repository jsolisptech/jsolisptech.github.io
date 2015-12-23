var main = function(){
  $('.dropdown-toggle').hover(function(){
    $('.dropdown-menu').toggle();
  });

  $('.cell').hover(function(){
    $('.dropdown-menu').toggle();
  });

  $('.dropdown-menu').hide();
}
(document).ready(main);
