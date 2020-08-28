$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items: 1
})
$('#nav').click(function () {
    $('.navigation').slideToggle()
})

$('.pro-item').mouseover(function () {
    $(this).find('.img').css({ 'transform': 'scale(1.1)' })
}).mouseout(function() {
    $(this).find('.img').css({ 'transform': 'scale(1)' })
  })