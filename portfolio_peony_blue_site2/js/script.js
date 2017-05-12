$(function(){

$('dd[id !="main-v"]').css("width","0px")


$('a').click(function(){

    $(this).attr("href");
//    alert($(this).attr("href"));

    if(!$(this).hasClass("currentBtn")){
    //現在のコンテンツを縮める
    $(".current").animate({"width":"0px"})
    //次のコンテンツを広げる
    $($(this).attr("href")).animate({"width":"800px"})

    //.currentを削除して次のコンテンツに.currentつける
    $("dd").removeClass();
    $($(this).attr("href")).addClass("current");
    //.currentBtn削除してクリックした部分に加える
    $('a').removeClass();
    $(this).addClass('currentBtn');

    }//end of if


    return false;
});



})//end of function

