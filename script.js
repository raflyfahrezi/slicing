/// <reference path="./typings/globals/jquery/index.d.ts" />

// setTimeout(() => {
//     $('.hiddenSecondContainer').show()
//     setTimeout(() => {
//         $('.hiddenThirdContainer').show()
//     }, 1000);
// }, 1000);

// var a = $('.navBar').height()/5
// console.log(a)

$('.secondContainer .content').fadeOut()
$('.thirdContainer .content').fadeOut()
$('.fourthContainer .content').fadeOut()
$('.fifthContainer .content').fadeOut()
$('.sixthContainer .content').fadeOut()
$('.seventhContainer .seventhContainerBox').fadeOut()
$('.ninethContainer .box').fadeOut()

$(window).scroll(function () { 
    if ($(window).scrollTop() > $('.secondContainer').height()+100) {
        $('.secondContainer .content').fadeIn('slow')
    } 
    if ($(window).scrollTop() > $('.thirdContainer').height()-100) {
      $('.thirdContainer .content').fadeIn('slow')
    } 
    if ($(window).scrollTop() > $('.fourthContainer').height()+700) {
      $('.fourthContainer .content').fadeIn('slow')
    } 
    if ($(window).scrollTop() > $('.fifthContainer').height()+1700) {
      $('.fifthContainer .content').fadeIn('slow')
    } 
    if ($(window).scrollTop() > $('.sixthContainer').height()+1900) {
      $('.sixthContainer .content').fadeIn('slow')
    } 
    if ($(window).scrollTop() > $('.seventhContainer').height()+2900) {
      $('.seventhContainer .seventhContainerBox').fadeIn('slow')
    } 
    if ($(window).scrollTop() > $('.ninethContainer').height()+4300) {
      $('.ninethContainer .box').fadeIn('slow')
    } 
  });

