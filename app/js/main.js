$(document).ready(function(){
    $(".search-icon").click(function(){
       $(this).parent().removeClass("disabled");
    })
    $("#search").on("input",function () {
        var resultList = $("#search-result");
        if($(this).val().length > 2){
            resultList.removeClass("disabled");
        }else{
            resultList.addClass("disabled");
        }
    });
    $("#search").focusout(function () {
        $(this).val("");
        $("#search-result").addClass("disabled");
        $(this).parent().addClass("disabled");
    })
    $(".burger-menu").click(function () {
        $(this).parent().toggleClass("mobile-main-menu")
    })
});