$("div").click(function () {
    $(this).toggleClass("full")
})

$("#full").click(function () {
    $("div").addClass("full");
    $("div").removeClass("empty");
})

$('#empty').click(function () {
    $("div").addClass("empty");
    $("div").removeClass("full");
})