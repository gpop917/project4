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
});