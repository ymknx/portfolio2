$(function(){
//scroll----------------------
    $('#gnav a').click(function(){
        var target = $($(this).attr('href')).offset().top;
//        alert(target);
        $('html,body').animate({
            scrollTop:target
        },500);

        return false;
    });






})
