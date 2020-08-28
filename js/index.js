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
    //    console.dir(img[0].attributes[0].value)
    //    console.dir(img)
    $('body').find('#img-dailog').attr('src', img)
})
$('.delet').click(function () {
    $('body').find('#popup').css({ 'display': 'none' })
})
$('#btn-donwload').click(function () {
    var imageUrl = $('body').find('.img-dailog').attr("src")
    $.ajax({ 
        processData : false,
        url: imageUrl, 
        success: function(data) {
            console.log(data)
        },
        error: function(r,x) {
     
        }
     }); 
})


