$(document).ready(function () {

    $('.Circle1').click(function () {
        $('.Sweaters').removeClass('none');
        $('.Hats, .Scarves, .Merch').addClass('none');

        $('.Circle1').removeClass('Pink');
        $('.Circle2, .Circle3, .Circle4').addClass('Pink');
    })

    $('.Circle2').click(function () {
        $('.Hats').removeClass('none');
        $('.Sweaters, .Scarves, .Merch').addClass('none');

        $('.Circle2').removeClass('Pink');
        $('.Circle1, .Circle3, .Circle4').addClass('Pink');
    })



    $('.Circle3').click(function () {
        $('.Scarves').removeClass('none');
        $('.Sweaters, .Merch, .Hats').addClass('none');

        $('.Circle3').removeClass('Pink');
        $('.Circle1, .Circle2, .Circle4').addClass('Pink');
    })


    $('.Circle4').click(function () {
        $('.Merch').removeClass('none');
        $('.Scarves, .Sweaters, .Hats').addClass('none');

        $('.Circle4').removeClass('Pink');
        $('.Circle1, .Circle2, .Circle3').addClass('Pink');
    })

});
