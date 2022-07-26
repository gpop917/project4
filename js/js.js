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

    //카테고리별 베스트 호버시 순위박스 변경
    var i=0;
    $('#category_b > ul > li').mouseenter(function(){
        $(this).css({border:"1px solid #f4642f"});
        i=($(this).index())+1;
        $('#chart > .best').hide();
        $("#chart > .best:nth-of-type"+"("+i+")").stop().fadeIn('fast');

        $('#title').text($(this).text());

    }).mouseleave(function(){
        $(this).css({border:"1px solid #fff"});
    });

    // 테마로 보는 책
    $('.thema_b:nth-of-type(2)').hide();
    $('.thema_b:nth-of-type(3)').hide();
    // 테마로 보는 책 이전 버튼
        $('.prev3').click(function(){
            thema_fade_left();
        });
        
        var j=0;
        function thema_fade_left(){
            j--;
            if(j<0){j=2;}
            $('.thema_b').eq(j).stop().fadeIn();
            $('.thema_b').eq(j+1).stop().fadeOut('slow');
        }
    
        //테마로 보는 책 다음 버튼 클릭
        $('.next3').click(function(){
            thema_fade_right();
        });
        
        function thema_fade_right(){
            j++;
            if(j>2){j=0;}
            //$('.thema_b').stop().fadeOut();
            $('.thema_b').eq(j).stop().fadeIn();
            $('.thema_b').eq(j-1).stop().fadeOut('slow');
        }

//공지사항 애니메이션, 버튼 클릭
    function notice(){
        $('#notice_b > table').stop().animate({marginTop:-43},function(){
            $('#notice_b > table tr:first').appendTo('#notice_b >table');
            $('#notice_b > table').css({marginTop:0});
        });
    }
    setInterval(notice,3000);

    $('#prev4').click(function(){
        $('#notice_b > table tr:last').prependTo('#notice_b >table');
        $('#notice_b > table').css({marginTop:-43});
        $('#notice_b > table').stop().animate({marginTop:0});
    });
    $('#next4').click(function(){
        $('#notice_b > table').stop().animate({marginTop:-43},function(){
            $('#notice_b > table tr:first').appendTo('#notice_b >table');
            $('#notice_b > table').css({marginTop:0});
        });
    });


});