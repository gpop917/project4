$(function(){

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "살아온 기적 살아갈 기적" },
        headers: { Authorization: "KakaoAK 09e623ff3085ea78939dea73206a1dc1"}
    })
        .done(function (msg) {
    
            console.log (msg);
            var divs = document.getElementsByClassName('book_b');
    
            for (var i = 0; i < divs.length; i++) {
    
                $(".book_b").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                $(".book_b").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
                $(".book_b").eq(i).append("<span>" + msg.documents[i].authors + "</span>");
    
    
                var str = msg.documents[i].contents;
                var str2 = str.substring(0, 60);
    
                $(".book_b").eq(i).append("<p>" + str2 + "</p>");
    
            }
            
        });
    
    });