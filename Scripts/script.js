$(document).ready(function() {
    $(".buttons").mouseover(function() {
        $(this).css('background-color', '#bdbdbd')
    })

    $(".buttons").mouseleave(function() {
        $(this).css('background-color', 'white')
    })
});