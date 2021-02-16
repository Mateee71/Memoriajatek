
$(function () {
//    $("#kezd").click(init);
    init();
});

function init() {
    $("#jatekter").empty();
    for (var i = 0; i < 32; i++) {
        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");
        $("#jatekter div").eq(i).attr({"id": (i + 1)});
        $("#jatekter img").eq(i).attr({"src": "kartya/hatlap.jpg", "alt": "kep"});
    }
    $("#jatekter div").click(lapcsere);
    $("#jatekter div").hover(function () {
        $(this).fadeTo("slow", 0.15); $(this).addClass("kartya");
    },
    function () {
         $(this).fadeTo("slow", 0.15); $(this).removeClass("kartya");
    });
}
function lapcsere() {

    var i = $(this).attr("id");
    console.log(i);
    $("#jatekter img").eq(i - 1).attr({"src": "kartya/" + i + ".png", "alt": "kep"});
    $("#jatekter img").eq(i - 1).fadeTo("slow", 0.1);
    
}