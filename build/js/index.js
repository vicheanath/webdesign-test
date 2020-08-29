$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
})
$('#nav').click(function () {
    $('.navigation').slideToggle()
})

$('.pro-item').mouseover(function () {
    $(this).find('.img').css({ 'transform': 'scale(1.1)' })
}).mouseout(function () {
    $(this).find('.img').css({ 'transform': 'scale(1)' })
})

// back-to-top
$(window).scroll(function () {
    // Show button after 100px
    var showAfter = 100;
    if ($(this).scrollTop() > showAfter) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

//Click event to scroll to top
$('#back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});
$('.img-box').click(function () {
    $('#popup').css({ 'display': 'block' })
    var img = $(this).find('img').attr("src");
    $('body').find('#img-box').attr('data-img',img).css({'background-image': 'url('+img+')'})
})
$('.delet').click(function () {
    $('body').find('#popup').css({ 'display': 'none' })
})
$('#btn-donwload').click(function () {
    var imagePath = $('body').find('#img-box').data('img')
    let arrName = imagePath.split('/');
    let fileName = arrName[arrName.length -1]

    console.log(fileName)
    saveAs(imagePath, fileName);

})


