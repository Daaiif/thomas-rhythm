$( function() {
  // Init tabs
    $( "#tabs" ).tabs();
    $( "#tabs-portfolio" ).tabs();

    // init slick carousel
    $('.reviews-carousel').slick({
      dots: true,
    });
});
