$(document).ready(function () {

  $('.navbar-toggle').on('click', function () {
    $(this).toggleClass('is-active');
  });

  // Modal video
  /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var video = $('#video');
    var video_modal = $('#video-modal');
    var url = video.attr('src') + '?autoplay=1';

    /* Remove iframe src attribute on page load to
    prevent autoplay in background */
    video.attr('src', '');

	/* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
    video_modal.on('shown.bs.modal', function(){
        video.attr('src', url);
    });

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    video_modal.on('hide.bs.modal', function(){
        video.attr('src', '');
    });

  $('.section__slider').owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoHeight:true,
    navText: ['<span class="sr-only">Prev</span><i class="fa fa-angle-left"></i>', '<span class="sr-only">Next</span><i class="fa fa-angle-right"></i>']
  });

  $('.js-home-slider').owlCarousel({
    items: 1,
    autoplay: true,
    nav: false,
    dots: true,
  });

});
