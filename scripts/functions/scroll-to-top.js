$(document).ready(() => {
    if (window.location.pathname !== "/index.html") {
        $("body").append($("<!-- Scroll to top button -->"));
        $("body").append($("<a></a>").addClass("scroll-to-top material-symbols-outlined"));
        $(".scroll-to-top").hide();
    }

    $(".parallax-wrapper").on({
        scroll: () => {
            if (document.querySelector(".parallax-wrapper").scrollTop >= 500 && $(".scroll-to-top").css("display") === "none") {
                $(".scroll-to-top").fadeIn(500);
            } else if (document.querySelector(".parallax-wrapper").scrollTop < 500 && $(".scroll-to-top").css("display") === "block") {
                $(".scroll-to-top").fadeOut(500);
            } 
        },
    });

    $(".scroll-to-top").on({
        click: () => {
            document.querySelector(".parallax-wrapper").scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
    });
});