$(document).ready(function () {

  $('.navbar-toggle').on('click', function () {
    $(this).toggleClass('is-active');
  });

  $('.section__slider').owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoHeight:true,
    navText: ['<span class="sr-only">Prev</span><i class="fa fa-angle-left"></i>', '<span class="sr-only">Next</span><i class="fa fa-angle-right"></i>']
  });

});
