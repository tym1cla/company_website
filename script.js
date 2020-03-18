$('navbar-toggler').on('click'), function () {
    $(this).toggleClass('menu-open');

}
// Animate Smooth Scroll to "Interior designs"
$('#view1').on('click', function () {
    const ab = $('#designs').position().top;

    $('html, body').animate(
        {
            scrollTop: ab
        },
        900
    );
});

// Animate Smooth Scroll to 'Furniture'
$('#view2').on('click', function () {
    const ab = $('#furniture').position().top;

    $('html, body').animate(
        {
            scrollTop: ab
        },
        900
    );
});

// Animate Smooth Scroll to 'Contact'
$('#view3').on('click', function () {
    const ab = $('#contact').position().top;

    $('html, body').animate(
        {
            scrollTop: ab
        },
        900
    );
});

