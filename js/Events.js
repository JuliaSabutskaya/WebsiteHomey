$(document).ready(function () {

    $('.MoreEvents').click(function () {
        $('.ModalEvents').removeClass('none');
        $('#Overlay').fadeIn(300);
    })
    $('.close-button').click(function () {
        $('.ModalEvents').addClass('none');
        $('#Overlay').fadeOut(300);
    })

    $('.HoverDivPosters').click(function () {
        $('.ModalPosters').removeClass('none');
        $('#Overlay').fadeIn(300);
    })
    $('.close-button').click(function () {
        $('.ModalPosters').addClass('none');
        $('#Overlay').fadeOut(300);
    })

    $('.Confirm').click(function () {
        alert("Все готово!");
    })

});