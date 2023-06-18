$(function () {
  $('#Donat').on('click', function () {
    $('#DonatePopUp').fadeIn(300);
    $('#Overlay').fadeIn(300);
  });
  $('.CloseButton').on('click', function () {
    $('#DonatePopUp').fadeOut(300);
    $('#Overlay').fadeOut(300);
  });
  $('.Confirm').click(function () {
    alert("Все готово!");
  })
});

$(document).ready(function () {

  $('.TextHoverPhoto').click(function () {
    $('.Modal').removeClass('None');
    $('#Overlay').fadeIn(300);

  })
  $('.ModalClose').click(function () {
    $('.Modal').addClass('None');
    $('#Overlay').fadeOut(300);
  })

});
