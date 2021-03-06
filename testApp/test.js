/**
 * Created by eerto_000 on 2016-04-06.
 */
"use strict";
/**
 * /requestData 의 경우 api call test
 * = 요청시 1depth json 객체 또는 string으로 전달
 * /responseData 의 경우 api call에 대한 서버 데이터 test
 * = 서버 응답의 경우 무조건 객체 형태.
 */
window.onload = function() {
    var obj = {
        "time" : "22:30:40",
        "type" : "REQ",
        "apiName" : "AMOC Manager",
        "apiUrl" : "/amoc-api/vod/buy/in-cash-nxt",
        "data" : {
            "pkgList": [
                {
                    "pkgCode": "2PG8",
                    "pkgName": "olleh tv GiGA UHD (STB)",
                    "pkgClass": "1"
                },
                {
                    "pkgCode": "2P29",
                    "pkgName": "KBS 무제한 즐기기",
                    "pkgClass": "3"
                },
                {
                    "pkgCode": "2PF8",
                    "pkgName": "프라임 무비팩",
                    "pkgClass": "3"
                }
            ]
        }
    };
    var test;

    test = JSON.stringify(obj);
    $.ajax({
        url: "http://192.168.0.2:9574/sendData",
        dataType : "json",
        method : "POST",
        data : JSON.stringify(obj),
        success : function(data, text, xhr) {
            console.log("success");
        },
        error : function (xhr, text, error) {
            console.log("error");
        }
    });
}