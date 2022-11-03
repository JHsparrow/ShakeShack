$('.menu_Location').click(function () {
  $('header .location').slideToggle();
});

$('.nav__menu').mouseover(function () {
  $('.LoNho').css('opacity', '0');
  $('.LoYho').css('opacity', '1');
});
$('.nav__menu').mouseout(function () {
  $('.LoNho').css('opacity', '1');
  $('.LoYho').css('opacity', '0');
});

$('.menu_Location').click(function () {
  $('header .location').slideToggle();
});
