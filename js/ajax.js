$(function(){

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "에세이" , size:20},
        headers: { Authorization: "KakaoAK 09e623ff3085ea78939dea73206a1dc1"}
    })
        .done(function (msg) {
    
            console.log (msg);
            var divs = document.getElementsByClassName('book_b');
    
            for (var i = 0; i < divs.length; i++) {
    
                $("#recommend > .book_b").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                $("#recommend > .book_b").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
                $("#recommend > .book_b").eq(i).append("<span>" + msg.documents[i].authors + "</span>");
    
    
                var str = msg.documents[i].contents;
                var str2 = str.substring(0, 50);
    
                $("#recommend > .book_b").eq(i).append("<p>" + str2 + "</p>");
    
            }
            
        });
    
        // 카테고리 신간 top5
    
        //카테고리-문학
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "세계문학",
            size: 20
        },
        headers: {
            Authorization: "KakaoAK c32e4c0795f84b719ac13598b015928c"
        }
    })
    
    .done(function(msg) {
        //신간 top5
        var chart_b_n = document.getElementsByClassName('chart_b_n');
        for (var i = 10; i < 15; i++) {
    
            var str = msg.documents[i].title;
            var str2 = str.substring(0, 18);
    
            $('#best_literature  .chart_b_n').eq(i-10).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
            $('#best_literature  .chart_b_n').eq(i-10).append("<h2>" + '<a href="#">' + (i - 9) + '<br></h2><h4>' + str2 + " ···</a>" + '</h4>');
            $('#best_literature  .chart_b_n').eq(i-10).append("<p>" + msg.documents[i].authors + "</p>");
    
            $('#best_literature  .chart_b_n').eq(i-10).append("<p></p>");
        }
        //문학 1~10
        var chart_b = document.getElementsByClassName('chart_b');
        for (var i = 0; i < chart_b.length; i++) {
    
            var str = msg.documents[i].title;
            var str2 = str.substring(0, 18);
    
            $('#best_literature .chart_b').eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
            $('#best_literature .chart_b').eq(i).append("<h2>" + '<a href="#">' + (i + 1) + '<br></h2><h4>' + str2 + " ···</a>" + '</h4>');
            $('#best_literature .chart_b').eq(i).append("<p>" + msg.documents[i].authors + "</p>");
    
            $('#best_literature .chart_b').eq(i).append("<p></p>");
        }
    });
    
    });