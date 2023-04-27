$(document).ready(() => {
    // Google icons
    $("head").append($("<!-- Google icons -->"),
        $("<link>").attr({
            "rel": "stylesheet",
            "href": "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        }));

    /* Custom functions */
    $("head").append($("<!-- Custom functions -->"));

    $("head").append($("<!-- Independent functions -->"),
        $("<script></script>").attr("src", "scripts/functions/independent-functions/dropdown-menu.js"),
        $("<script></script>").attr("src", "scripts/functions/independent-functions/page-fade-in.js"));

    if (window.location.pathname !== "/index.html") {
        $("head").append($("<script></script>").attr("src", "scripts/functions/independent-functions/scroll-to-top.js"));
    }

});