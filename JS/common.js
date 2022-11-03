$('.menu_Location').click(function () {
  $('header .location').slideToggle();
});

$('.menu_Location a').mouseover(function () {
  $('.menu_Location a #LoNho').css('opacity', '0');
  $('.menu_Location a #LoYho').css('opacity', '1');
});
$('.menu_Location a').mouseout(function () {
  $('.menu_Location a #LoNho').css('opacity', '1');
  $('.menu_Location a #LoYho').css('opacity', '0');
});

$('.menu_Brand a').mouseover(function () {
  $('.menu_Brand a #LoNho').css('opacity', '0');
  $('.menu_Brand a #LoYho').css('opacity', '1');
});
$('.menu_Brand a').mouseout(function () {
  $('.menu_Brand a #LoNho').css('opacity', '1');
  $('.menu_Brand a #LoYho').css('opacity', '0');
});

$('.menu_Delivery a').mouseover(function () {
  $('.menu_Delivery a #LoNho').css('opacity', '0');
  $('.menu_Delivery a #LoYho').css('opacity', '1');
});
$('.menu_Delivery a').mouseout(function () {
  $('.menu_Delivery a #LoNho').css('opacity', '1');
  $('.menu_Delivery a #LoYho').css('opacity', '0');
});

$('.menu_Food a').mouseover(function () {
  $('.menu_Food a #LoNho').css('opacity', '0');
  $('.menu_Food a #LoYho').css('opacity', '1');
});
$('.menu_Food a').mouseout(function () {
  $('.menu_Food a #LoNho').css('opacity', '1');
  $('.menu_Food a #LoYho').css('opacity', '0');
});
