$(window).on("load", start);

function start() {
    $("#header").load("header.html");
    $("#menu").load("menu.html");
    $("#chips").load("chips.html");
}

$(document).on("click","#menu a", navigate);

function navigate(e){
    let url = $(this).attr("href");

    $("#content").load(url);
}