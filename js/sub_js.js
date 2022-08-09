// 이미지 미리보기
$(function(){
    $(".thum-zoom").on("click",function(){
        var h_size = $(window).height() - 30 + "px";
        var src;
        var book_num = location.href;
        var novel = "novel";
        var string = $(".thum-zoom img").attr("src");
        if(book_num.indexOf(novel)!=-1){
            src = string.replace("200","480");	
        }else{
            src = string.replace("270","480");
        }
        $(".img-zoom-pop img").attr("src",src);
        $("html").css({'margin-right':'17px','overflow':'hidden'});
        $(".img-zoom-pop img").css("max-height",h_size);
        $(".thum-zoom-wrap").show();
    });

    $(".img-zoom").on("click",function(){
        $(".thum-zoom-wrap").hide();
        $("html").css({'margin-right':'0px','overflow':'auto'});
        return false;
    });
    
    $(window).resize(function(){
        var h_size = $(window).height() - 60 + "px";
        $(".img-zoom-pop img").css("max-height",h_size);		
    });

    //이 책과 함께 구매한 책 json
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "생각",
    },
    headers: {
        Authorization: "KakaoAK c32e4c0795f84b719ac13598b015928c"
    }
})
.done(function(msg) {

    var book_b = document.getElementsByClassName('book_b');

    for (var i = 0; i < book_b.length; i++) {

        var str = msg.documents[i].title;
        var str2 = str.substring(0, 25);

        $('#with_b > .book_b').eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
        $('#with_b > .book_b').eq(i).append("<h4>" + '<a href="#">' + str2 + "</a>" + '</h4>');
        $('#with_b > .book_b').eq(i).append("<span>" + msg.documents[i].authors + "</span>");

    }
})

//책 소개 이미지 펼쳐보기, 접기
$(function(){
    $("#unfold").click(function(){
        $("#img_b").css({height:6600});
        $(this).stop().hide();
        $("#fold").stop().show();
    });
    $("#fold").click(function(){
        $("#img_b").css({height:600});
        $(this).stop().hide();
        $(window).scrollTop(2300);
        $("#unfold").stop().show();
    });
});


// 반품교환
        $(function () {

            $.get("./txt/sub-txt.txt", function (data) {

                $(".sub-txtbox").html(data);



            })
        });


});