$(function () {
    $('#toggleNav').on('hide.bs.collapse', function () {
        $('.navbar-toggler').removeClass('open');
    })
    $('#toggleNav').on('show.bs.collapse', function () {
        $('.navbar-toggler').addClass('open');
    })
});