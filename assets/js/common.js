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
    responsive: {
      1024: {
        items: 3,
      },
      1280: {
        items: 4,
      },
    },
  });
});
