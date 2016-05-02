/**
 * Created by eerto_000 on 2016-04-06.
 */

window.onload = function() {
    $.ajax({
        url: "http://192.168.0.2:9574/data",
        dataType : "json",
        method : "POST",
        data: "catId=MGREGRE111&contentId=23232332",
        // data : {
        //     teswwet : "abc",
        //     testst : "dddd",
        //     parent : {
        //         obj : "abcdef",
        //         transfor : "wefwef"
        //     }
        // },
        success : function(data, text, xhr) {
            console.log("success");
        },
        error : function (xhr, text, error) {
            console.log("error");
        }
    });
}