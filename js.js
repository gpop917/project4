$(function(){
    //슬라이더_top
    $('#slider>.prev').click(function(){
        $('#recommend > .book_b:last').prependTo('#recommend');
        $('#recommend').css({"marginLeft":-260,"width":"+=220"});
        $('#recommend').stop().animate({marginLeft:-40},800);
    });
    $('#slider>.next').click(function(){
        $('#recommend').css({"width":"+=220"});
        $('#recommend').stop().animate({marginLeft:-260},800,function(){
            $('#recommend > .book_b:first').appendTo('#recommend');
            $('#recommend').css({marginLeft:-40});
        });
    });

    //마우스 올렸을때 내용_top
    $('#recommend > .book_b').hover(function(){
        $(this).find('p').stop().fadeIn('fast');
    },function(){
        $('.book_b > p').stop().hide();
    });
       


});