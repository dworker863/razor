$(window).on('load', function () {
  $('.carousel-view').owlCarousel({
    items: 2,
    loop: true,
    margin: 60,
    autoWidth: true,
    responsive: {
      1024: {
        items: 3,
      },
    },
  });

  $('.carousel-specifications').owlCarousel({
    items: 2,
    loop: true,
    margin: 60,
    autoWidth: true,
    dots: true,
    responsive: {
      1024: {
        items: 3,
      },
      1280: {
        items: 4,
      },
    },
  });

  $('.owl-next').on('click', function () {
    $('.carousel-specifications').trigger('next.owl.carousel');
  });
  $('.owl-prev').on('click', function () {
    $('.carousel-specifications').trigger('prev.owl.carousel', [300]);
  });
});
