$(document).ready(() => {
    // Google icons
    $("head").append($("<!-- Google icons -->"),
        $("<link>").attr({
            "rel": "stylesheet",
            "href": "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        }));

    /* Custom functions */
    $("head").append($("<!-- Custom functions -->"),
        $("<script></script>").attr("src", "scripts/functions/dropdown-menu.js"),
        $("<script></script>").attr("src", "scripts/functions/page-fade-in.js"),
        $("<script></script>").attr("src", "scripts/functions/scroll-to-top.js"));
});