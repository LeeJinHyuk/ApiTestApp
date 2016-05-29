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
        "test" : [
            {"abc" : "1"},
            {"bbc" : "2"}
        ]
    };
    var test;

    test = JSON.stringify(obj);
    $.ajax({
        //url: "http://192.168.0.2:9574/responseData",
        url: "http://192.168.0.2:9574/requestData",
        dataType : "json",
        method : "POST",
        data: "catId=MGREGRE111&contentId=23232332",
        //data : JSON.stringify(obj),
        success : function(data, text, xhr) {
            console.log("success");
        },
        error : function (xhr, text, error) {
            console.log("error");
        }
    });
}