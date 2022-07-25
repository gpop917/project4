$(function(){

    // 오늘의 추천
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "에세이" , size:20},
    headers: { Authorization: "KakaoAK 09e623ff3085ea78939dea73206a1dc1"}
})
    .done(function (msg) {

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
        $('#best_literature  .chart_b_n').eq(i-10).append("<h2>" + '<a href="#">' + (i - 9) + '<br></h2>');
        $('#best_literature  .chart_b_n').eq(i-10).append("<div>");
        $('#best_literature  .chart_b_n div').eq(i-10).append('<h4>' + str2 + " ···</a>" + '</h4>');
        $('#best_literature  .chart_b_n div').eq(i-10).append("<p>" + msg.documents[i].authors + "</p>");


    }
    //문학 1~10
    var chart_b = document.getElementsByClassName('chart_b');
    for (var i = 0; i < chart_b.length; i++) {

        var str = msg.documents[i].title;
        var str2 = str.substring(0, 18);

  
        $('#best_literature .chart_b').eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
        $('#best_literature .chart_b').eq(i).append("<h2>" + '<a href="#">' + (i + 1) + '<br></h2>');
        $('#best_literature  .chart_b').eq(i).append("<div>");
        $('#best_literature  .chart_b div').eq(i).append('<h4>' + str2 + " ···</a>" + '</h4>');
        $('#best_literature  .chart_b div').eq(i).append("<p>" + msg.documents[i].authors[0] + "</p>");

    }
})

//카테고리-경제/경영
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "경영",
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

        $('#best_economy .chart_b_n').eq(i-10).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
        $('#best_economy .chart_b_n').eq(i-10).append("<h2>" + '<a href="#">' + (i - 9) + '<br></h2>');
        $('#best_economy .chart_b_n').eq(i-10).append("<div>");
        $('#best_economy .chart_b_n div').eq(i-10).append('<h4>' + str2 + " ···</a>" + '</h4>');
        $('#best_economy .chart_b_n div').eq(i-10).append("<p>" + msg.documents[i].authors[0] + "</p>");
    }
    //경제/경영 1~10
    var chart_b = document.getElementsByClassName('chart_b');
    for (var i = 0; i < chart_b.length; i++) {

        var str = msg.documents[i].title;
        var str2 = str.substring(0, 18);

        $('#best_economy .chart_b').eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
        $('#best_economy .chart_b').eq(i).append("<h2>" + '<a href="#">' + (i + 1) + '<br></h2>');
        $('#best_economy .chart_b').eq(i).append("<div>");
        $('#best_economy .chart_b div').eq(i).append('<h4>' + str2 + " ···</a>" + '</h4>');
        $('#best_economy .chart_b div').eq(i).append("<p>" + msg.documents[i].authors[0] + "</p>");
    }
})

//카테고리-자기계발
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "꿈",
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

        $('#best_self .chart_b_n').eq(i-10).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
        $('#best_self .chart_b_n').eq(i-10).append("<h2>" + '<a href="#">' + (i - 9) + '<br></h2>');
        $('#best_self .chart_b_n').eq(i-10).append("<div>");
        $('#best_self .chart_b_n div').eq(i-10).append('<h4>' + str2 + " ···</a>" + '</h4>');
        $('#best_self .chart_b_n div').eq(i-10).append("<p>" + msg.documents[i].authors[0] + "</p>");
    }
    //자기계발 1~10
    var chart_b = document.getElementsByClassName('chart_b');
    for (var i = 0; i < chart_b.length; i++) {

        var str = msg.documents[i].title;
        var str2 = str.substring(0, 18);

        $('#best_self .chart_b').eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
        $('#best_self .chart_b').eq(i).append("<h2>" + '<a href="#">' + (i + 1) + '<br></h2>');
        $('#best_self .chart_b').eq(i).append("<div>");
        $('#best_self .chart_b div').eq(i).append('<h4>' + str2 + " ···</a>" + '</h4>');
        $('#best_self .chart_b div').eq(i).append("<p>" + msg.documents[i].authors[0] + "</p>");
    }
})

//카테고리-인문
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "인문",
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

        $('#best_humanity .chart_b_n').eq(i-10).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
        $('#best_humanity .chart_b_n').eq(i-10).append("<h2>" + '<a href="#">' + (i - 9) + '<br></h2>');
        $('#best_humanity .chart_b_n').eq(i-10).append("<div>");
        $('#best_humanity .chart_b_n div').eq(i-10).append('<h4>' + str2 + " ···</a>" + '</h4>');
        $('#best_humanity .chart_b_n div').eq(i-10).append("<p>" + msg.documents[i].authors[0] + "</p>");
    }
    //인문 1~10
    var chart_b = document.getElementsByClassName('chart_b');
    for (var i = 0; i < chart_b.length; i++) {

        var str = msg.documents[i].title;
        var str2 = str.substring(0, 18);

        $('#best_humanity .chart_b').eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
        $('#best_humanity .chart_b').eq(i).append("<h2>" + '<a href="#">' + (i + 1) + '<br></h2>');
        $('#best_humanity .chart_b').eq(i).append("<div>");
        $('#best_humanity .chart_b div').eq(i).append('<h4>' + str2 + " ···</a>" + '</h4>');
        $('#best_humanity .chart_b div').eq(i).append("<p>" + msg.documents[i].authors[0] + "</p>");
    }
})

//카테고리-사회
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "사회",
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

        $('#best_society .chart_b_n').eq(i-10).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
        $('#best_society .chart_b_n').eq(i-10).append("<h2>" + '<a href="#">' + (i - 9) + '<br></h2>');
        $('#best_society .chart_b_n').eq(i-10).append("<div>");
        $('#best_society .chart_b_n div').eq(i-10).append('<h4>' + str2 + " ···</a>" + '</h4>');
        $('#best_society .chart_b_n div').eq(i-10).append("<p>" + msg.documents[i].authors[0] + "</p>");
    }
    //사회 1~10
    var chart_b = document.getElementsByClassName('chart_b');
    for (var i = 0; i < chart_b.length; i++) {

        var str = msg.documents[i].title;
        var str2 = str.substring(0, 18);

        $('#best_society .chart_b').eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
        $('#best_society .chart_b').eq(i).append("<h2>" + '<a href="#">' + (i + 1) + '<br></h2>');
        $('#best_society .chart_b').eq(i).append("<div>");
        $('#best_society .chart_b div').eq(i).append('<h4>' + str2 + " ···</a>" + '</h4>');
        $('#best_society .chart_b div').eq(i).append("<p>" + msg.documents[i].authors[0] + "</p>");
    }
})

//카테고리-여행
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "여행",
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

        $('#best_travel .chart_b_n').eq(i-10).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
        $('#best_travel .chart_b_n').eq(i-10).append("<h2>" + '<a href="#">' + (i - 9) + '<br></h2>');
        $('#best_travel .chart_b_n').eq(i-10).append("<div>");
        $('#best_travel .chart_b_n div').eq(i-10).append('<h4>' + str2 + " ···</a>" + '</h4>');
        $('#best_travel .chart_b_n div').eq(i-10).append("<p>" + msg.documents[i].authors[0] + "</p>");
    }
    //여행 1~10
    var chart_b = document.getElementsByClassName('chart_b');
    for (var i = 0; i < chart_b.length; i++) {

        var str = msg.documents[i].title;
        var str2 = str.substring(0, 18);

        $('#best_travel .chart_b').eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
        $('#best_travel .chart_b').eq(i).append("<h2>" + '<a href="#">' + (i + 1) + '<br></h2>');
        $('#best_travel .chart_b').eq(i).append("<div>");
        $('#best_travel .chart_b div').eq(i).append('<h4>' + str2 + " ···</a>" + '</h4>');
        $('#best_travel .chart_b div').eq(i).append("<p>" + msg.documents[i].authors[0] + "</p>");
    }
})


//신간 json
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "4차",
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

        $('#new_b > .book_b').eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'>" + '</a>');
        $('#new_b > .book_b').eq(i).append("<h4>" + '<a href="#">' + str2 + " ···</a>" + '</h4>');
        $('#new_b > .book_b').eq(i).append("<p>" + msg.documents[i].authors + "</p>");

    }
})

});