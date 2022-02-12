$(window).on('load', function () {
  $('.owl-carousel').owlCarousel({
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
});
