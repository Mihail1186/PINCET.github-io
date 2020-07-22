$(document).ready(function () {
   $('.row__map').hover(function (event) {
      $('.map-header').toggleClass('active');
   })

})


$(document).ready(function () {
   $('.link__pulse').hover(function (event) {
      $('.content__hover-inner').toggleClass('active');
   })

})


$(document).ready(function () {
   $('.nav__burger').click(function (event) {
      $('.nav__burger, .menu').toggleClass('active');
      $('body').toggleClass('lock');
   })

})

